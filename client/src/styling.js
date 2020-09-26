import styled from 'styled-components';

export const List = styled.ul`
  display: flex !important;
  height: 100% !important;
  list-style: none !important;
  overflow: auto hidden !important;
  padding-left: 0px !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  min-width: 100% !important;
  scroll-snap-type: x mandatory !important;
`;

export const Card = styled.li`
  border-width: 0px 10px;
  max-width: 25%;
  flex: 0 0 25%;
  border-style: solid !important;
  border-color: transparent !important;
  scroll-snap-align: start !important;
  scroll-snap-stop: always !important;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 50%;
`;
