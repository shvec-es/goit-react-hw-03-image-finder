import React from 'react';
import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ imgUrl, bigImgUrl }) => {
  return (
    <>
      <img
        className={s['ImageGalleryItem-image']}
        src={imgUrl}
        alt=""
        data-source={bigImgUrl}
      />
    </>
  );
};

export default ImageGalleryItem;
