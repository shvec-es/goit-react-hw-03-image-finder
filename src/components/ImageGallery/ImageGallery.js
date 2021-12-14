import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import picturesAPI from '../../services/getPictures';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button';
import Modal from 'components/Modal';

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    visible: false,
    bigImg: '',
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearchName = prevProps.searchName;
    const currentSearchName = this.props.searchName;

    if (prevSearchName !== currentSearchName) {
      this.setState({ status: 'pending' });
      try {
        const data = await picturesAPI.fetchPictures(currentSearchName);

        if (data.hits.length > 0) {
          this.setState({ pictures: data.hits, status: 'resolved' });
        } else {
          this.setState({ status: 'idle' });
          toast.error('Enter correct querry');
        }
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  handleClick = () => {
    picturesAPI
      .fetchPictures(this.props.searchName, this.state.page + 1)
      .then(data =>
        this.setState(({ page, pictures }) => ({
          page: page + 1,
          pictures: [...pictures, ...data.hits],
        })),
      );
  };

  openModal = e => {
    if (e.target === e.currentTarget) {
      return;
    }

    this.setState({
      visible: true,
      bigImg: e.target.dataset.source,
    });

    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ visible: false });
    document.body.style.overflow = 'scroll';
  };

  render() {
    const { pictures, visible, bigImg, error, status } = this.state;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return (
        <div className={s['Loader']}>
          <Loader type="Rings" color="#00BFFF" height={100} width={100} />;
        </div>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul
            className={s['ImageGallery']}
            onClick={this.openModal}
          >
            {pictures.map(({ id, webformatURL, largeImageURL }) => (
              <li key={id} className={s['ImageGalleryItem']}>
                <ImageGalleryItem
                  imgUrl={webformatURL}
                  bigImgUrl={largeImageURL}
                />
              </li>
            ))}
          </ul>
          <Button onClick={this.handleClick} />

          {visible && (
            <Modal onClose={this.closeModal}>
              <button
                className={s['Button']}
                type="button"
                onClick={this.closeModal}
              ></button>
              <img src={bigImg} alt="" width="560" />
            </Modal>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
