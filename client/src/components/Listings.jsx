// listings component
import React from 'react';
import ListingEntry from './ListingEntry.jsx';
import styled from 'styled-components';
import {List} from '../styling.js';

const Listings = (props) => {
  const places = props.listings.map((listing) => <ListingEntry key={listing.houseId} listing={listing}/>);
  return (
    <List>{places}</List>
  );
};
export default Listings;