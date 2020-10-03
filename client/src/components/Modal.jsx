import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import SaveModal from './SaveModal.jsx';
import FormModal from './FormModal.jsx';
import { Heart, HeartButton } from '../styling.jsx';
import { keyframes } from 'styled-components';
import $ from 'jquery';

class ListingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      opacity: 0,
      isCreate: false,
      saved: this.props.saved,
    };
    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
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

  handleSave(input) {
    // saves/updates the database based on clicks on existing lists in the modal
    $.ajax({
      method: 'PATCH',
      url: '/api/update_collection',
      data: {
        houseId: this.props.listing,
        name: input,
        isSaved: true
      },
      success: () => {
        this.handleFormUpdate();
      }
    });
  }

  handleUnsave() {
    // ajax get request to get the name by id?
    $.ajax({
      method: 'GET',
      url: '/api/collection_name',
      data: {
        houseId: this.props.listing
      },
      success: (data) => {
        $.ajax({
          method: 'PATCH',
          url: '/api/update_collection',
          data: {
            houseId: this.props.listing,
            name: data.savedTo,
            isSaved: false
          },
          success: () => {
            this.setState({
              saved: false,
            });
            // update component list
            this.props.update();
          }
        });
      }
    });
  }

  handleFormUpdate() {
    // saves/updates database based on create list form submit button
    this.setState({
      saved: true,
      isOpen: !this.state.isOpen
    });
    // update component list
    this.props.update();
  }

  render() {

    return (
      <Heart>

        {!this.state.saved && <HeartButton onClick={this.toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'inline-block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', strokeWidth: 2}}>
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </HeartButton>}

        {this.state.saved && <HeartButton onClick={this.handleUnsave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'inline-block', fill: '#FF385D', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', strokeWidth: 2}}>
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </HeartButton>}

        {!this.state.isCreate && <SaveModal isOpen={this.state.isOpen} isCreate={this.state.isCreate} toggleModal={this.toggleModal} toggleCreate={this.toggleCreate} opacity={this.state.opacity} afterOpen={this.afterOpen} beforeClose={this.beforeClose} collections={this.props.collections} handleSave={this.handleSave}/>}

        {this.state.isCreate && <FormModal isOpen={this.state.isOpen} isCreate={this.state.isCreate} toggleModal={this.toggleModal} toggleCreate={this.toggleCreate} opacity={this.state.opacity} afterOpen={this.afterOpen} beforeClose={this.beforeClose} listing={this.props.listing} handleUpdate={this.handleFormUpdate}/>}

      </Heart>
    );
  }
}

export default ListingModal;
