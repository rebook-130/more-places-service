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
  // get all lists that have been created
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
  // update the saved props of a listing
  var filter = { houseId: req.body.houseId };
  var update = { savedTo: req.body.name, isSaved: true};
  console.log(filter, update);
  db.Listing.findOneAndUpdate(filter, { '$set': update}).exec(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Failed to update');
    } else {
      res.status(202).send('Updated listing');
    }
  });
});

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`);
});