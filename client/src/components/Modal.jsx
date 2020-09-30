import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Heart, HeartButton } from '../styling.jsx';
import { keyframes } from 'styled-components';

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
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: all 500ms;
  &.open {
    animation-name: ${slideUp};
    animation-duration: 0.5s;
  }
  &.closed {
    animation-name: ${slideDown};
    animation-duration: 0.5s;
  }
`;

const SaveModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);

  var toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  var afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  };

  var beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  return (
    <Heart>
      <HeartButton onClick={toggleModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'inline-block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', strokeWidth: 2}}>
          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        </svg>
      </HeartButton>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        className={isOpen ? 'open' : 'closed'}
      >
        <span>I am a modal!</span>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </Heart>
  );
};


export default SaveModal;
