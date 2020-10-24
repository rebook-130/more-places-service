const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('newrelic');

const app = express();
const port = 3004;

const router = require('./router.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`);
});
