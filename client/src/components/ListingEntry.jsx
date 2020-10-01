// individual listing component
import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import PopupModal from './Modal.jsx';
import { Card, Frame, TopFrame, Host, NoHost, HostText, Image, Rating, Star, RoomDescription, ReviewCount, Text, Price } from '../styling.jsx';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
  }

  render() {
    return (
      <ModalProvider backgroundComponent={FadingBackground}>
        <Card>
          <div ref={this.props.refs[this.props.index]}>
            <Frame>
              <Image src={this.props.listing.photoUrl}></Image>
              <TopFrame>
                {this.props.listing.isSuperHost &&
                  <Host>
                    <HostText>SUPERHOST</HostText>
                  </Host>
                }
                {!this.props.listing.isSuperHost &&
                  <NoHost>
                  </NoHost>
                }

                <PopupModal listing={this.props.listing.houseId} photoUrl={this.props.listing.photoUrl} saved={this.props.listing.isSaved} collections={this.props.collections}/>

              </TopFrame>
            </Frame>
            <Rating>
              <Star>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style={{height: 14 + 'px', width: 14 + 'px', fill: '#FF385D'}}>
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/>
                </svg>
              </Star>
              <span>{this.props.listing.rating}</span> &nbsp;
              <ReviewCount>{`(${this.props.listing.reviewCount})`}</ReviewCount>
            </Rating>
            <RoomDescription>
              <Text>{`${this.props.listing.roomType} · `}</Text>
              <Text>{this.props.listing.numBeds} Beds</Text>
            </RoomDescription>
            <RoomDescription>
              <Text>
                {`${this.props.listing.location}, ${this.props.listing.description}`}
              </Text>
            </RoomDescription>
            <div>
              <Price>${this.props.listing.price}</Price>
              <Text> / night</Text>
            </div>
          </div>
        </Card>
      </ModalProvider>
    );
  }
}

export default ListingEntry;