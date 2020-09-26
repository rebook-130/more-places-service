const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');

// helper fcn to generate random number
let getRandomInt = function(min, max, rating = false) {
  if (rating) {
    result = (Math.floor(Math.random() * (max - min + 1) + min) + Math.random()).toFixed(1);
    return result > 5 ? 5 : parseFloat(result);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// make a bunch of listings
let listings = [];
// pick description/roomtype at random
const roomType = ['Entire place', 'Shared Room', 'Private Room', 'Hotel Room'];
const description = ['Central Location!', 'Comfy and Quaint!', 'Very quiet neighborhood', '100% Private!', 'Ultra Luxury Room', '420 Friendly Stay!', 'Cozy and Comfortable', 'Wake up to spectacular views', 'Panoramic Views', 'Spacious', 'Exquisite and Close to everything!', 'Stunning Views', 'Lovers Paradise', 'Minimalist Dream', 'Beautiful Midcentury Oasis', 'Contemporary Dream', 'Earthy Modernist Home', 'Large Private Area'];

for (let i = 0; i < 50; i++) {
  const location = faker.address.city();
  const isSuperHost = faker.random.boolean(25);
  let newListing = {
    houseId: i,
    photoUrl: `https://airbnb-fake-images.s3-us-west-1.amazonaws.com/img-${i+1}.jpg`,
    location: location,
    description: description[Math.floor(Math.random() * description.length)],
    isSuperHost: isSuperHost,
    rating: getRandomInt(3, 5, true),
    reviewCount: getRandomInt(0, 100),
    isSaved: false,
    roomType: roomType[Math.floor(Math.random() * roomType.length)],
    numBeds: getRandomInt(0, 5),
    price: getRandomInt(80, 500)
  };
  listings.push(newListing);
}
// insert all seeded data into db
db.Listing.insertMany(listings);
console.log('Database seeded!');