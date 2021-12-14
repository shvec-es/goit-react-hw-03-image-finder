import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    searchName: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  handleSearchbar = searchName => {
    this.setState({ searchName });
  };

  render() {
    const { searchName } = this.state;
    return (
      <div>
        <ToastContainer autoClose={3000} theme="colored" />
        <Searchbar onSubmit={this.handleSearchbar} />
        <ImageGallery searchName={searchName} />
      </div>
    );
  }
}

export default App;
