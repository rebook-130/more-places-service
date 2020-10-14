var database = require('./index');

module.exports = {
  getListings: (callback) => {
    // given an array of houseIds, query into the collection and return the 12 documents
    // takes in filter/field/limit/callback
    Listing.findRandom({}, {}, {limit: 12}, function(err, results) {
      if (!err) {
        callback(null, results);
      } else {
        callback(err);
      }
    });
  },

  getLists: (callback) => {
    SavedLists.find({}, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    })
  },
  removeLists: (callback) => {
    SavedLists.deleteMany({}, (err, data) => {
      callback(err, data);
    });
  },
  revertSaved: (callback) => {
    Listing.updateMany({isSaved: true}, { $set: {isSaved: false} }, {}, callback);
  }

}