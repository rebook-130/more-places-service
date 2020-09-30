import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import SaveModal from '../client/src/components/Modal.jsx';
import ListingEntry from '../client/src/components/ListingEntry.jsx';
import { Card, Frame, TopFrame, Host, NoHost, HostText, Image, Rating, Star, RoomDescription, ReviewCount, Text, Price } from '../client/src/styling.jsx';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';

const mockListing = {
  houseId: 1,
  photoUrl: 'photo.url',
  location: 'LA',
  description: 'Nice house',
  isSuperHost: false,
  rating: '5.0',
  reviewCount: 10,
  isSaved: false,
  roomType: 'Full Room',
  numBeds: 1,
  price: 120
};

describe('Listing Entry Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<ListingEntry refs={React.createRef()} listing={mockListing} />);
    expect(wrapper.exists()).toBe(true);
  });

});

