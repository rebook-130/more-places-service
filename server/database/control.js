// document manages all interactions with the db (all crud operations from router manifest here)

const database = require('./index');

module.exports = {
  getListings: (callback) => {
    // given an array of houseIds, query into the collection and return the 12 documents
    // takes in filter/field/limit/callback
    database.Listing.findRandom({}, {}, {limit: 12}, callback);
  },
  getLists: (callback) => {
    // gets all savedlists
    database.SavedLists.find({}, 'name photoUrl count time', callback);
  },
  createList: (data, callback) => {
    database.SavedLists.create(data, callback)
  },
  removeAllLists: (callback) => {
    database.SavedLists.deleteMany({}, (err, data) => {
      callback(err, data);
    });
  },
  revertSaved: (callback) => {
    database.Listing.updateMany({isSaved: true}, { $set: {isSaved: false} }, {}, callback);
  },
  saveToList: (data, callback) => {
    database.Listing.findOneAndUpdate({houseId: data.houseId},{ '$set': data.update }).exec((err) => {
      if (err) {
        callback(err);
        return;
      } else {
        database.SavedLists.findOneAndUpdate({name: data.name}, { '$inc': {count: 1}}).exec(callback)
      }
    });
  },
  removeFromList: (data, callback) => {
    database.SavedLists.findOneAndUpdate({name: data.name}, { '$inc': {count: -1}}).exec((err) => {
      if (err) {
        callback(err);
        return;
      } else {
        db.Listing.findOneAndUpdate({ houseId: req.body.houseId }, { '$set': update }).exec(callback);
      }
    })
  }
}