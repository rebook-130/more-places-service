// main component
import React from 'react';
import $ from 'jquery';
import Listings from './Listings.jsx';
import styled from 'styled-components';
import { Header, Container, TitleContainer, SelectContainer, Prev, Next, Page } from '../styling.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  // get 12 listings
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/more_places',
      success: (data) => {
        this.setState({
          listings: data
        });
      }
    });
  }

  handleNext(page) {

  }

  handlePrev(page) {

  }

  render() {
    return (
      <Container>
        <TitleContainer>
          <Header>More places to stay</Header>
          <SelectContainer>
            <Page> 1 / 3 </Page>
            <Prev>
              <svg viewBox="-5 -8 30 30" focusable="false">
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"></path>
              </svg>
            </Prev>
            <Next>
              <svg viewBox="-5 -8 30 30">
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
              </svg>
            </Next>
          </SelectContainer>
        </TitleContainer>
        <Listings listings={this.state.listings}/>
      </Container>
    );
  }
}

export default App;