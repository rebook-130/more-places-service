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
  &.open {
    animation-name: ${slideUp};
    animation-duration: 0.5s;
  }
  &.closed {
    animation-name: ${slideDown};
    animation-duration: 0.5s;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 64px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const ModalFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 64px;
  border-top: 1px solid rgb(235, 235, 235);
`;

const Button = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
  z-index: 10;
`;

const CloseButton = styled.button`
  padding: 4px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: rgb(34,34,34);
  cursor: pointer;
  position: relative;
  background: transparent;

  :hover {
    border: none;
    background: rgb(247, 247, 247);
  }

  :active {
    transform: scale(0.92) !important;
  }
`;

const Text = styled.h1`
  font-size: 1em;
  margin: 0px;
  padding: 0px;
`;

const CreateButton = styled.button`
  cursor: pointer;
  width: 90%;
  font-size: 16px;
  line-height: 20px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: transparent;
  margin: 0px;
  text-decoration: underline;
  transition: box-shadow 0.2s ease 0s;

  :hover {
    border: none;
    background: rgb(247, 247, 247);
  }

  :active {
    transform: scale(0.96) !important;
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
        <Button>
          <CloseButton onClick={toggleModal}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'black', strokeWidth: 3}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
          </CloseButton>
        </Button>
        <ModalHeader>
          <div>
            <Text>Save to a list</Text>
          </div>
        </ModalHeader>
        <div>Body</div>
        <ModalFooter>
          <CreateButton>Create a list</CreateButton>
        </ModalFooter>
      </StyledModal>
    </Heart>
  );
};


export default SaveModal;
