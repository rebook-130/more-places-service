// main component
import React from 'react';
import $ from 'jquery';
import Listings from './Listings.jsx';


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
      <div>
        <h2>More places to stay</h2>
        <Listings listings={this.state.listings}/>
      </div>
    );
  }
}

export default App;