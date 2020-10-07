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
      listings: [],
      refs: { 0: React.createRef(), 1: React.createRef(), 2: React.createRef(), 3: React.createRef(), 4: React.createRef(), 5: React.createRef(), 6: React.createRef(), 7: React.createRef(), 8: React.createRef(), 9: React.createRef(), 10: React.createRef(), 11: React.createRef()},
      page: 1,
      collections: []
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.update = this.update.bind(this);
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
    // get collections
    this.update();
  }

  // slide to next 4 slides
  handleNext() {
    let newPage;
    if (this.state.page === 3) {
      newPage = 1;
      this.state.refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    } else if (this.state.page === 2) {
      newPage = 3;
      this.state.refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    } else {
      newPage = 2;
      this.state.refs[7].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    }
    this.setState({
      page: newPage
    });
  }

  // slide to prev 4 slides
  handlePrev() {
    let newPage;
    if (this.state.page === 3) {
      newPage = 2;
      this.state.refs[4].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    } else if (this.state.page === 2) {
      newPage = 1;
      this.state.refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    } else {
      newPage = 3;
      this.state.refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    }
    this.setState({
      page: newPage
    });
  }

  // updates collections in modal on changes
  update() {
    $.ajax({
      method: 'GET',
      url: '/api/saved_lists',
      success: (data) => {
        this.setState({
          collections: data
        });
      }
    });
  }


  render() {
    return (
      <Container>
        <TitleContainer>
          <Header>More places to stay</Header>
          <SelectContainer>
            <Page> {this.state.page} / 3 </Page>
            <Prev onClick={this.handlePrev}>
              <svg viewBox="-5 -8 30 30" focusable="false">
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"></path>
              </svg>
            </Prev>
            <Next onClick={this.handleNext}>
              <svg viewBox="-5 -8 30 30">
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
              </svg>
            </Next>
          </SelectContainer>
        </TitleContainer>
        <Listings listings={this.state.listings} refs={this.state.refs} collections={this.state.collections} update={this.update}/>
      </Container>
    );
  }
}

export default App;