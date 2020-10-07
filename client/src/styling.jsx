import styled from 'styled-components';
import { device } from './media.jsx';

export const Container = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  padding: 48px 80px;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(247, 247, 247);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1%;
  margin-top: 1%;
`;

export const Header = styled.h2`
  color: rgb(34, 34, 34);
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;

export const Page = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-right: 16px;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.9);
  width: 32px;
  height: 32px;
  outline: none;
  cursor: pointer;
  touch-action: manipulation;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: box-shadow 0.2s ease 0s;

  :hover {
    border-color: rgba(0, 0, 0, 0.08);
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px;
    transform: scale(1.04);
  }

  :active {
    border-color: rgba(0, 0, 0, 0.08);
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: none;
    transform: scale(1);
  }
`;

export const Prev = styled(Button)`
  margin-right: 6px;
`;

export const Next = styled(Button)`
  margin-left: 6px;
`;

export const List = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-left: -9px;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {display:none;}
`;

export const Entry = styled.div`
  width: 100%;
`;

export const Card = styled.li`
  border-width: 0px 10px;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  // Adjust based on screen width
  @media ${device.laptopL} {
    max-width: 23.2%;
    flex: 0 0 25%;
  }
  @media ${device.laptopM} {
    max-width: 31.3%;
    flex: 0 0 32%;
  }
  @media ${device.laptopS} {
    max-width: 40%;
    flex: 0 0 40%;
  }
  @media ${device.laptopXS} {
    max-width: 66%;
    flex: 0 0 66%;
  }
`;

export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 100%;
  max-height: 173px;
  display: block;
  contain: content;
  border-radius: 8px;
`;

export const TopFrame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  padding: 8px;
  position: absolute;
  top: 0px;
`;

export const Host = styled.div`
  display: inline-flex;
  vertical-align: top;
  background-clip: padding-box;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(34, 34, 34);
`;

export const NoHost = styled.div`
  display: inline-flex;
  vertical-align: top;
  background-clip: padding-box;
  max-width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
`;

export const HostText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  max-height: 16px;
`;

export const Heart = styled.div`
  display: inline-flex;
`;

export const HeartButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  margin-right: 10px;
  cursor: pointer;

  :active {
    transform: scale(0.92);
    transition: 0.25s ease
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 30vh;
  bottom: 10px;
  position: relative;

  // Adjust based on screen height
  @media ${'(max-height: 600px)'} {
    height: 100% !important;
  }
`;

export const Rating = styled.div`
  display: flex;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const Star = styled.span`
  margin-right: 4px;
  display: inline-flex;
  align-items: center;
`;

export const RoomDescription = styled.div`
  line-height: 20px;
  margin-bottom: 2px;
  max-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export const ReviewCount = styled.span`
  color: rgb(113, 113, 113);
`;

export const Text = styled.span`
  line-height: 20px;
  font-weight: 300;
`;

export const Price = styled.span`
  font-weight: 600;
`;

// MODAL STYLING

export const ModalHeader = styled.header`
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

export const ModalFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 5px 0px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 64px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const ModalButton = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
  z-index: 10;
`;

export const CloseButton = styled.button`
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

export const ModalText = styled.h1`
  font-size: 1em;
  margin: 0px;
  padding: 0px;
`;

export const CreateButton = styled.button`
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

export const SubmitButton = styled.button`
  cursor: pointer;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  border: none;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  width: 90%;

  :active {
    transform: scale(0.96);
  }

  :disabled {
    cursor: not-allowed !important;
    opacity: 1 !important;
    background: rgb(221, 221, 221) !important;
    color: rgb(255, 255, 255) !important;
  }
`;