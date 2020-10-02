import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import SaveModal from './SaveModal.jsx';
import FormModal from './FormModal.jsx';
import { Heart, HeartButton } from '../styling.jsx';
import { keyframes } from 'styled-components';

class ListingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      opacity: 0,
      isCreate: false,
      saved: this.props.saved
    };
    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
    this.unSave = this.unSave.bind(this);
  }

  toggleModal(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleCreate(e) {
    this.setState({
      isCreate: !this.state.isCreate
    });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({
        opacity: 1
      });
    }, 10);
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({
        opacity: 0
      });
      setTimeout(resolve, 200);
    });
  }

  // if saved, onclick should update save to false and decrement count on list
  unSave() {
    // this.props.savedTo ajax patch req dec count and updated saved to false
    this.setState({
      saved: !this.state.saved
    });
  }

  render() {

    return (
      <Heart>

        {!this.state.saved && <HeartButton onClick={this.toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'inline-block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', strokeWidth: 2}}>
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </HeartButton>}

        {this.state.saved && <HeartButton onClick={this.unSave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'inline-block', fill: '#FF385D', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', strokeWidth: 2}}>
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </HeartButton>}

        {!this.state.isCreate && <SaveModal isOpen={this.state.isOpen} isCreate={this.state.isCreate} toggleModal={this.toggleModal} toggleCreate={this.toggleCreate} opacity={this.state.opacity} afterOpen={this.afterOpen} beforeClose={this.beforeClose} collections={this.props.collections} />}

        {this.state.isCreate && <FormModal isOpen={this.state.isOpen} isCreate={this.state.isCreate} toggleModal={this.toggleModal} toggleCreate={this.toggleCreate} opacity={this.state.opacity} afterOpen={this.afterOpen} beforeClose={this.beforeClose} listing={this.props.listing} />}

      </Heart>
    );
  }
}

export default ListingModal;
