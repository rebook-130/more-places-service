const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');

// helper fcn to generate random number
let getRandomInt = function(min, max, rating = false) {
  if (rating) {
    result = (Math.floor(Math.random() * (max - min + 1) + min) + Math.random()).toFixed(2);
    return result > 5 ? '5.0' : parseFloat(result).toString();
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// make a bunch of listings
let listings = [];
// pick description/roomtype at random
const roomType = ['Entire Place', 'Shared Room', 'Private Room', 'Hotel Room', 'Entire Villa', 'Entire Guesthouse', 'Entire Cottage', 'Entire Apartment', 'Private Studio'];
const description = ['Central Location!', 'Comfy and Quaint!', 'Very quiet neighborhood', '100% Private!', 'Ultra Luxury Room', '420 Friendly Stay!', 'Cozy and Comfortable', 'Wake up to spectacular views', 'Panoramic Views', 'Spacious', 'Exquisite and Close to everything!', 'Stunning Views', 'Lovers Paradise', 'Minimalist Dream', 'Beautiful Midcentury Oasis', 'Contemporary Dream', 'Earthy Modernist Home', 'Large Private Area'];
const location = ['San Diego', 'Malibu', 'Los Angeles', 'Big Bear Lake', 'Joshua Tree', 'Palm Springs', 'Crestline', 'Newport', 'Pasadena', 'Santa Barbara', 'San Francisco', 'Granada', 'Berkeley', 'San Jose', 'Long Beach', 'Santa Monica', 'Anaheim', 'Burbank', 'Sacramento', 'Hundleby', 'Yucca Valley', 'Salisbury', 'Sutton', 'Lake Arrowhead'];

for (let i = 0; i < 50; i++) {
  const isSuperHost = faker.random.boolean(25);
  let newListing = {
    houseId: i,
    photoUrl: `https://airbnb-fake-images.s3-us-west-1.amazonaws.com/img-${i+1}.jpg`,
    location: location[Math.floor(Math.random() * location.length)],
    description: description[Math.floor(Math.random() * description.length)],
    isSuperHost: isSuperHost,
    rating: getRandomInt(3, 5, true),
    reviewCount: getRandomInt(0, 100),
    isSaved: false,
    savedTo: 'None',
    roomType: roomType[Math.floor(Math.random() * roomType.length)],
    numBeds: getRandomInt(1, 7),
    price: getRandomInt(80, 500)
  };
  listings.push(newListing);
}
// insert all seeded data into db
db.Listing.insertMany(listings);
console.log('Database seeded!');
