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

router.post('/api/user/:id/collections', (req, res) => {
  console.log('saving collection ', req.body.name);
  // insert a new list into the saved DB
  const data = {
    name: req.body.name,
    photoUrl: req.body.photoUrl,
    count: 1,
    time: 'Any time',
  };
  model.createList(data, postCallback(req, res));
});

router.patch('/api/user/:user_id/collections', (req, res) => {
  // update the saved props of a listing and count of collection when clicked
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

router.get('/api/user/:user_id/properties/:property_id/collections', (req, res) => {
  // get specific collection by houseId (BE SURE TO LIMIT 1)
  model.getHouseList(req.params, (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      const result = JSON.parse(JSON.stringify(data));
      res.status(200).send(result[0]);
    }
  });
});

router.delete('/api/user/:user_id/collections', (req, res) => {
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
