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

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`);
});