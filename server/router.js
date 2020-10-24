const express = require('express');

const router = express.Router();
const model = require('./database/model/cassandraModel');

const getCallback = (req, res) => (err, data) => {
  if (err) {
    res.status(400).send(err.message);
  } else {
    res.status(200).send(data.rows);
  }
};

const postCallback = (req, res) => (err, data) => {
  if (err) {
    res.status(400).send(err.message);
  } else {
    res.status(202).send(data.rows);
  }
};

const patchCallback = (req, res) => (err, result) => {
  if (err) {
    console.log(err);
    res.status(500).send(err.message);
  } else {
    res.status(202).send(result);
  }
};


// get 12 random listings from listings DB
router.get('/api/listing/:user_id/more-places', (req, res) => {
  model.getListings(getCallback(req, res));
});

// get all lists that have been created from saved DB
router.get('/api/user/:user_id/collections', (req, res) => {
  model.getCollectionsByUser(req.params.user_id, getCallback(req, res));
});

// insert a new list into the saved DB
// router.post('/api/user/:id/collections', (req, res) => {
//   console.log('saving collection ', req.body.name);
//   const data = {
//     name: req.body.name,
//     photoUrl: req.body.photoUrl,
//     count: 1,
//     time: 'Any time',
//   };
//   model.createList(data, postCallback(req, res));
// });

// update user's saved property records
router.patch('/api/user/:user_id/collections', (req, res) => {
  const update = {
    user_id: req.params.user_id,
    property_id: req.body.houseId,
    collection_name: req.body.name,
    photo_url: req.body.photo_url,
  };
  if (req.body.isSaved === 'true') {
    model.saveProperty(update, patchCallback(req, res));
  } else {
    model.unsaveProperty(update, patchCallback(req, res));
  }
});

router.get('/api/user/:user_id/properties/:property_id', (req, res) => {
  // get specific collection by houseId (BE SURE TO LIMIT 1)
  model.getSavedProperty(req.params, getCallback(req, res));
});

router.delete('/api/user/:user_id/collections', (req, res) => {
  // removes all collections saved collection by name
  model.removeCollection((err, data) => {
    if (err) {
      res.status(500).send('Failed to delete records');
    } else {
      res.status(202).send('deleted ', data.deletedCount);
    }
  });
});

module.exports = router;
