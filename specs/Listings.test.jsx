import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import 'jest-styled-components';

// Components
import Listings from '../client/src/components/Listings.jsx';
import {List} from '../client/src/styling.jsx';

const mockListings = [{
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
}];

describe('Listings Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Listings listings={mockListings} />);
    expect(wrapper.exists()).toBe(true);
  });

});

