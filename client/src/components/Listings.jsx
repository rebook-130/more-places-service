// listings component
import React from 'react';
import ListingEntry from './ListingEntry.jsx';
import styled from 'styled-components';
import {List} from '../styling.jsx';

const Listings = (props) => {

  const places = props.listings.map((listing, index) => <ListingEntry refs={props.refs} index={index} key={listing.houseId} listing={listing} collections={props.collections} update={props.update}/>);
  return (
    <List>{places}</List>
  );
};
export default Listings;