const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3004;
const db = require('./database/index.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/more_places', (req, res) => {
  // get 12 random listings from listings DB
  db.getListings((err, data) => {
    if (err) {
      res.status(400).send('Failed to get listings');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/saved_lists', (req, res) => {
  // get all lists that have been created from saved DB
  db.SavedLists.find({}, 'name photoUrl count time', (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/create_list', (req, res) => {
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

app.patch('/api/update_listing', (req, res) => {
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

app.patch('/api/update_collection', (req, res) => {
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

app.get('/api/collection_name', (req, res) => {
  // get specific collection by houseId
  db.Listing.find({houseId: req.query.houseId}, 'savedTo', (err, data) => {
    if (err) {
      res.status(400).send('Failed to get lists');
    } else {
      result = JSON.parse(JSON.stringify(data));
      res.status(200).send(result[0]);
    }
  });
});

app.delete('/api/remove_collection', (req, res) => {
  // removes one saved collection by name
  db.savedLists.deleteOne({name: req.query.name}, (err, data) => {
    if (err) {
      res.status(500).send('Failed to delete record');
    } else {
      res.status(200).send(data);
    }
  })
})

app.delete('/api/remove_collection', (req, res) => {
  db.savedLists.deleteOne({houseId: req.query.houseId}, (err, data) => {
    if (err) {
      res.status(500).send('Failed to delete record');
    } else {
      res.status(200).send(data);
    }
  })
})


app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`);
});