// main component
import React from 'react';
import $ from 'jquery';
import Listings from './Listings.jsx';
import styled from 'styled-components';
import { Header, Container } from '../styling.js';


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

  render() {
    return (
      <Container>
        <Header>More places to stay</Header>
        <Listings listings={this.state.listings}/>
      </Container>
    );
  }
}

export default App;