import React, { Component } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchName } = this.state;

    if (searchName.trim() === '') {
      toast.warning('Enter word for search');
      return;
    }

    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={s['Searchbar']}>
        <form className={s['SearchForm']} onSubmit={this.handleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            value={this.state.searchName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
