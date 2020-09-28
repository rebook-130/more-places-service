// Holds Listing Model
const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

// connect to listings db
mongoose.connect('mongodb://localhost/listings', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error Connecting'));
db.once('open', () => console.log('Connected to Listings DB'));

// schema
const listingSchema = mongoose.Schema({
  houseId: {type: Number, unique: true},
  photoUrl: String,
  location: String,
  description: String,
  isSuperHost: Boolean,
  rating: String,
  reviewCount: Number,
  isSaved: Boolean,
  roomType: String,
  numBeds: Number,
  price: Number
});

// add schema plugin for random documents
listingSchema.plugin(random);

const Listing = mongoose.model('Listing', listingSchema);

const getListings = (callback) => {
  // given an array of houseIds, query into the collection and return the 12 documents
  // takes in filter/field/limit/callback
  Listing.findRandom({}, {}, {limit: 12}, function(err, results) {
    if (!err) {
      callback(null, results);
    } else {
      callback(err);
    }
  });
};

module.exports.Listing = Listing;
module.exports.getListings = getListings;