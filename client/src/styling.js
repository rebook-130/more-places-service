import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  max-width: 1120px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.h2`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

export const List = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {display:none;}
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
  padding: 7px;
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

export const HostText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  max-height: 16px;
`;

export const Heart = styled.div`
  display: inline-flex;
`;

export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: 173px;
`;

export const Rating = styled.div`
  margin-bottom: 6px;
`;

export const Star = styled.span`
  margin-right: 4px;
  display: inline-flex;
  align-items: center;
`;

export const RoomDescription = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 20px;
  margin-bottom: 2px;
  max-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export const Text = styled.span`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 20px;
`;

export const Price = styled.span`
  font-weight: 800;
`;