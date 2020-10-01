import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { ModalButton, CloseButton, CreateButton, ModalHeader, ModalText, ModalFooter, Heart, HeartButton } from '../styling.jsx';
import { keyframes } from 'styled-components';
import Collections from './Collections.jsx';

// sliding animations
const slideUp = keyframes`
  0% { margin-top: 100%; }
  100% { margin-top: 0%; }
`;

const slideDown = keyframes`
  0% { margin-top: 0%; }
  100% { margin-top: 100%; }
`;

const StyledModal = Modal.styled`
  position: relative;
  max-width: 568px;
  max-height: 529px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: all 500ms;
  backdropTransitionOutTiming={0}
  &.open {
    animation-name: ${slideUp};
    animation-duration: 0.5s;
  }
  &.closed {
    animation-name: ${slideDown};
    animation-duration: 0.5s;
  }
`;

const SaveModal = (props) => {
  return (
    <StyledModal
      isOpen={props.isOpen}
      afterOpen={props.afterOpen}
      beforeClose={props.beforeClose}
      onBackgroundClick={props.toggleModal}
      onEscapeKeydown={props.toggleModal}
      opacity={props.opacity}
      className={props.isOpen ? 'open' : 'closed'}
    >
      <ModalButton>
        <CloseButton onClick={props.toggleModal}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'black', strokeWidth: 3}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
        </CloseButton>
      </ModalButton>
      <ModalHeader>
        <div>
          <ModalText>Save to a list</ModalText>
        </div>
      </ModalHeader>
      <div>
        <Collections collections={props.collections}/>
      </div>
      <ModalFooter>
        <CreateButton onClick={props.toggleCreate}>Create a list</CreateButton>
      </ModalFooter>
    </StyledModal>
  );
};

export default SaveModal;
