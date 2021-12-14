import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModal);
  }

  handleModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.handleModal}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
