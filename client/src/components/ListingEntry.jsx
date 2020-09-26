// individual listing component
import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { Card, Image } from '../styling.js';

class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
  }

  render() {
    return (
      <Card>
        <div>
          <div className="listing-top">
            <div className="listing-img">
              <Image src={this.props.listing.photoUrl}></Image>
            </div>
            <div className="listing-headers">
              <div className="listing-superhost">Superhost</div>
              <div className="listing-heart"><btn>heart</btn></div>
            </div>
          </div>
          <div className="listing-rating">
            <span className="star-icon">star</span>
            <span className="rating">{this.props.listing.rating}</span>
            <span className="reviewCount">({this.props.listing.reviewCount})</span>
          </div>
          <div className="listing-room">
            <span className="description">{this.props.listing.roomType}</span>
            <span className="description">{this.props.listing.numBeds} Beds</span>
          </div>
          <div className="listing-description">
            <span className="description">{this.props.listing.location} - </span>
            <span className="description">{this.props.listing.description}</span>
          </div>
          <div className="listing-price">
            <span className="price">${this.props.listing.price}</span>
            <span className="description"> / night</span>
          </div>
        </div>
      </Card>
    );
  }
}

export default ListingEntry;