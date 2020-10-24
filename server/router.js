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
router.get('/api/users/:user_id/more_places', (req, res) => {
  model.getListings(getCallback(req, res));
});

// get all lists that have been created from saved DB
router.get('/api/users/:user_id/collections', (req, res) => {
  model.getCollectionsByUser(req.params.user_id, (err, data) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      const collArray = [];
      if (data.rows.length) {
        const collections = {};
        for (let i = 0; i < data.rows.length; i += 1) {
          if (collections[data.rows[i].collection_name]) {
            collections[data.rows[i].collection_name].count += 1;
          } else {
            collections[data.rows[i].collection_name] = data.rows[i];
            collections[data.rows[i].collection_name].count = 1;
          }
        }
        const key = Object.keys(collections)
        for (let j = 0; j < key.length; j += 1) {
          collArray.push(collections[key[j]]);
        }
      }
      res.status(200).send(collArray);
    }
  });
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
router.patch('/api/users/:user_id/collections', (req, res) => {
  console.log('name ', req.body.collection_name);
  const update = {
    user_id: req.params.user_id,
    property_id: req.body.houseId,
    collection_name: req.body.collection_name,
    photo_url: req.body.photo_url,
  };
  if (req.body.isSaved === 'true') {
    model.saveProperty(update, patchCallback(req, res));
  } else {
    model.unsaveProperty(update, patchCallback(req, res));
  }
});

router.get('/api/users/:user_id/properties/:property_id', (req, res) => {
  // get specific collection by houseId (BE SURE TO LIMIT 1)
  model.getSavedProperty(req.params, getCallback(req, res));
});

router.delete('/api/users/:user_id/collections', (req, res) => {
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
