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

// export const ImageDiv = styled.div`
//   position: absolute !important;
// `;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
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