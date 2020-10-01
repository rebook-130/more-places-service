// listings component
import React from 'react';
import styled from 'styled-components';
import Entry from './CollectionEntry.jsx';

const Body = styled.div`
  position: absolute;
  top: 12%;
  right: 0%;
  padding: 23px 16px 11px 14px;
  margin-bottom: 10px;
  overflow-y: auto;
  max-height: 357px;
  width: 537px;
`;

const Collections = (props) => {

  const savedLists = props.collections.map((collection, index) => <Entry key={index} collection={collection}/>);
  return (
    <Body>{savedLists}</Body>
  );
};

export default Collections;