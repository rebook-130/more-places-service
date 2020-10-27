const express = require('express');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const path = require('path');
require('newrelic');
const numCPUs = require('os').cpus().length;
const router = require('./router.js');

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i += 1) {
    // Create a worker
    cluster.fork();
  }
} else {
  // Workers share the TCP connection in this server
  const app = express();
  const port = 3004;

  app.use(express.static(path.join(__dirname, '/../client/dist')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/', router);

  // All workers use this port
  app.listen(port, () => {
    console.log(`more-places server listening at http://localhost:${port}`);
  });
}
