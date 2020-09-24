// Holds Listing Model

const mongoose = require('mongoose');

// connect to listings db
mongoose.connect('mongodb://localhost/listings', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error Connecting'));
db.once('open', () => console.log('Connected to Listings DB'));

// schema
const listingSchema = new mongoose.Schema({
  houseId: {type: Number, unique: true},
  photoUrl: String,
  location: String,
  description: String,
  isSuperHost: Boolean,
  rating: Number,
  reviewCount: Number,
  isSaved: Boolean,
  roomType: String,
  numBeds: Number,
  price: Number
});

const Listing = db.model('Listing', listingSchema);

module.exports = Listing;