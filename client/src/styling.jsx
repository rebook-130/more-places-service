import styled from 'styled-components';

export const Container = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  margin-top: 10%;
  padding: 48px 80px;
  max-width: 1120px;
  width: 100%;
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
  max-width: 23.2%;
  flex: 0 0 25%;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 265px;
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
  object-fit: fill;
  width: 100%;
  height: 173px;
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
