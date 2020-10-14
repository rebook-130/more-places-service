const express = require('express')
const router = express.Router()
const db = require('./database/index.js');
const control = require('./database/index.js')


router.get('/api/more_places', (req, res) => {
  // get 12 random listings from listings DB
  db.getListings((err, data) => {
    if (err) {
      res.status(400).send('Failed to get listings');
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/api/saved_lists', (req, res) => {
  // get all lists that have been created from saved DB
  db.SavedLists.find({}, 'name photoUrl count time', (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      console.log(data)
      res.status(200).send(data);
    }
  });
});

router.post('/api/create_list', (req, res) => {
  // insert a new list into the saved DB
  console.log(req.body.name)
  var data = {
    name: req.body.name,
    photoUrl: req.body.photoUrl,
    count: 1,
    time: 'Any time'
  };
  db.SavedLists.create(data, (err) => {
    if (err) {
      res.status(400).send('Failed to create list');
    } else {
      res.status(202).send('List created');
    }
  });
});

router.patch('/api/update_listing', (req, res) => {
  // update the saved props of a listing when created
  var filter = { houseId: req.body.houseId };
  var update = { savedTo: req.body.name, isSaved: true};
  db.Listing.findOneAndUpdate(filter, { '$set': update}).exec(function(err) {
    if (err) {
      res.status(500).send('Failed to update');
    } else {
      res.status(202).send('Updated listing');
    }
  });
});

router.patch('/api/update_collection', (req, res) => {
  // update the saved props of a listing and count of collection when clicked
  if (req.body.isSaved === 'true') {
    var update = { savedTo: req.body.name, isSaved: req.body.isSaved};
    // if saving, increment count and update save props of listing to true
    db.Listing.findOneAndUpdate({houseId: req.body.houseId}, { '$set': update}).exec((err) => {
      if (err) {
        res.status(500).send('Failed to update listing');
      } else {
        db.SavedLists.findOneAndUpdate({name: req.body.name}, { '$inc': {count: 1}}).exec((err) => {
          if (err) {
            res.status(500).send('Failed to update collection');
          } else {
            res.status(202).send('Updated listing & collection');
          }
        });
      }
    });
  } else {
    var update = { isSaved: req.body.isSaved};
    // else, decrement count and change save to false
    db.SavedLists.findOneAndUpdate({name: req.body.name}, { '$inc': {count: -1}}).exec((err) => {
      if (err) {
        res.status(500).send('Failed to update listing');
      } else {
        db.Listing.findOneAndUpdate({houseId: req.body.houseId}, { '$set': update}).exec((err) => {
          if (err) {
            res.status(500).send('Failed to update collection');
          } else {
            res.status(202).send('Updated listing & collection');
          }
        });
      }
    });
  }
});

router.get('/api/collection_name', (req, res) => {
  // get specific collection by houseId
  db.SavedLists.find({houseId: req.query.houseId}, 'savedTo', (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      result = JSON.parse(JSON.stringify(data));
      res.status(200).send(result[0]);
    }
  });
});


router.delete('/api/remove_collection', (req, res) => {
  // removes all collections saved collection by name
  db.removeLists((err, data) => {
    if (err) {
      res.status(500).send('Failed to delete records');
    } else {
      console.log(data)
      res.status(204).send('deleted ' + data.deletedCount);
    }
  })
})


router.get('/api/testLists', (req, res) => {
  db.getLists((err, data) => {
    if (err) {
      console.log(err);
      res.send(400);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  })
})

module.exports = router