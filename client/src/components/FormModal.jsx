import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { ModalButton, CloseButton, SubmitButton, ModalHeader, ModalText, ModalFooter, Heart, HeartButton } from '../styling.jsx';
import { keyframes } from 'styled-components';
import $ from 'jquery';

const Form = Modal.styled`
  position: relative;
  max-width: 568px;
  max-height: 305px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  backdropTransitionOutTiming={0}
`;

const FormBody = styled.div`
  width: 100%;
  height: 105px;
  padding: 32px 16px;
`;

const InputBox = styled.div`
  position: relative;
  cursor: text;
  display: flex;
  height: 56px;
  width: 100%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  :focus-within {
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset !important
  }
`;

const InputText = styled.input`
  width: 94%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 26px 12px 10px;
  min-height: 1px;
  font-size: 16px;
  line-height: 20px;
`;

const Placeholder = styled.label`
  position: absolute;
  top: 18px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  color: rgb(113, 113, 113);
  transform-origin: 0% 0%;
  transition: transform 0.5s;

  input:focus ~ & {
    transform: translateY(-8px) scale(0.75) !important;
  }

  input:valid ~ & {
    transform: translateY(-8px) scale(0.75) !important;
  }
`;


const Description = styled.div`
  padding-top: 8px;
  display: flex;
  color: rgb(113, 113, 113);
  font-size: 12px;
  line-height: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400;
`;

class FormModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    // send ajax post req to server to insert into saved lists
    $.ajax({
      method: 'POST',
      url: '/api/create_list',
      data: {
        name: this.state.value,
        photoUrl: `https://source.unsplash.com/480x480/?home&sig=${Math.random()}`
      }
    });
    // send ajax patch req to server to update isSaved/savedto
    $.ajax({
      method: 'PATCH',
      url: '/api/update_listing',
      data: {
        name: this.state.value,
        houseId: this.props.listing
      }
    });
    // close pop ups
    this.props.toggleCreate();
  }

  render() {
    return (
      <Form
        isOpen={this.props.isCreate}
        afterOpen={this.props.afterOpen}
        beforeClose={this.props.beforeClose}
        onBackgroundClick={this.props.toggleCreate}
        opacity={this.props.opacity}
      >
        <ModalButton>
          <CloseButton onClick={this.props.toggleCreate}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'black', strokeWidth: 3}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
          </CloseButton>
        </ModalButton>
        <ModalHeader>
          <div>
            <ModalText>Name this list</ModalText>
          </div>
        </ModalHeader>
        <FormBody>
          <InputBox>
            <InputText maxLength='50' onChange={this.onChange} required='required'></InputText>
            <Placeholder>Name</Placeholder>
          </InputBox>
          <Description> 50 characters maximum </Description>
        </FormBody>
        <ModalFooter>
          <SubmitButton disabled={!this.state.value} onClick={this.handleSubmit}>Create</SubmitButton>
        </ModalFooter>
      </Form>
    );
  }
}

export default FormModal;
