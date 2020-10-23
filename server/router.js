const express = require('express');

const router = express.Router();
// const db = require('./database/index');
const model = require('./database/model/cassandraModel');

const callback = (req, res) => (err, data) => {
  if (err) {
    res.status(400).send(err.name);
  } else {
    res.status(200).send(data.rows);
  }
};

router.get('/api/listing/:id/more-places', (req, res) => {
  // get 12 random listings from listings DB
  model.getListings(callback(req, res));
});

router.get('/api/user/:id/collections', (req, res) => {
  // get all lists that have been created from saved DB
  model.getLists((err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/api/user/:id/collections', (req, res) => {
  console.log('saving collection ', req.body.name);
  // insert a new list into the saved DB
  const data = {
    name: req.body.name,
    photoUrl: req.body.photoUrl,
    count: 1,
    time: 'Any time',
  };
  model.createList(data, (err) => {
    if (err) {
      res.status(400).send('Failed to create list');
    } else {
      res.status(202).send('List created');
    }
  });
});

router.patch('/api/user/:id/collections', (req, res) => {
  // update the saved props of a listing and count of collection when clicked
  const update = { savedTo: req.body.name, isSaved: req.body.isSaved };
  const { houseId, name } = { houseId: req.body.houseId, name: req.body.name };
  const cb = (err) => {
    if (err) {
      res.status(500).send('Failed to update collection');
    } else {
      res.status(202).send('Updated listing & collection');
    }
  };

  if (req.body.isSaved === 'true') {
    // if saving, increment count and update save props of listing to true
    model.saveToList({ update, houseId, name }, cb);
  } else {
    // else, decrement count and change save to false
    model.removeFromList({ update, houseId, name }, cb);
  }
});

router.get('/api/user/:id/properties/:id/collections', (req, res) => {
  // get specific collection by houseId
  model.getHouseList(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      const result = JSON.parse(JSON.stringify(data));
      res.status(200).send(result[0]);
    }
  });
});

router.delete('/api/user/:id/collections', (req, res) => {
  // removes all collections saved collection by name
  model.removeAllLists((err, data) => {
    if (err) {
      res.status(500).send('Failed to delete records');
    } else {
      res.status(202).send('deleted ', data.deletedCount);
    }
  });
});

// may be able to deprecate this one
// router.patch('/api/revert_saved', (req, res) => {
//   model.revertSaved((err) => {
//     if (err) {
//       res.status(500).send('Failed to revert saved records');
//     } else {
//       res.status(202);
//     }
//   });
// });

// may be able to deprecate this one, it looks like the app is onlu using the one below
// router.patch('/api/saved_listing', (req, res) => {
//   // update the saved props of a listing when created
//   let houseId = req.body.houseId;
//   let name = req.body.name;
//   let update = { savedTo: req.body.name, isSaved: true};
//   // db.Listing.findOneAndUpdate(filter, { '$set': update }).exec(
//   model.saveToList({ houseId, update, name }, (err) => {
//     if (err) {
//       res.status(500).send('Failed to update');
//     } else {
//       res.status(202).send('Updated listing');
//     }
//   });
// });

module.exports = router;
