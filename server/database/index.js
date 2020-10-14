// Holds Listing Model
const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

// connect to listings db
mongoose.connect('mongodb://localhost/listings', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error Connecting'));
db.once('open', () => console.log('Connected to Listings DB'));

// listing schema
const listingSchema = mongoose.Schema({
  houseId: {type: Number, unique: true},
  photoUrl: String,
  location: String,
  description: String,
  isSuperHost: Boolean,
  rating: String,
  reviewCount: Number,
  isSaved: Boolean,
  savedTo: String,
  roomType: String,
  numBeds: Number,
  price: Number
});

// saved lists schema
const savedSchema = mongoose.Schema({
  name: String,
  photoUrl: String,
  count: Number,
  time: String
});

// add schema plugin for random documents
listingSchema.plugin(random);

const Listing = mongoose.model('Listing', listingSchema);
const SavedLists = mongoose.model('SavedLists', savedSchema);

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

const getLists = (callback) => {
  SavedLists.find({}, function(err, results) {
    if (err) {
      callback(err);
    } else {
      callback(null, results)
    }
  })
}

const removeLists = (callback) => {
  SavedLists.deleteMany({}, (err, data) => {
    callback(err, data);
  });
}

const revertSaved = (callback) => {
  Listing.updateMany({isSaved: true}, { $set: {isSaved: false} }, {}, callback);
}

module.exports.Listing = Listing;
module.exports.SavedLists = SavedLists;
module.exports.getListings = getListings;
module.exports.getLists = getLists;
module.exports.removeLists = removeLists;
module.exports.revertSaved = revertSaved;
module.exports.db = db
