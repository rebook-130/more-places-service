const fs = require('fs');
const csvWriter = require('csv-write-stream');
const Papa = require('papaparse');
const path = require('path');
const csv = require('csv-parser');

const writer = csvWriter();

// for 100k users, try between 0 and 20 collections per user
// for each collection try 2-20 saved properties
// 100000 * 10 * 10 ~~ 10M saved properties;

const generateCollectionData = (parseResult) => {
  writer.pipe(fs.createWriteStream('postgresSavedPropsSeed.csv'));
  // take however many collections, and loop that many times
  let id = 0;

  for (let i = 0; i < parseResult.length; i += 1) {
    const savedPropsCount = Math.round(Math.random() * 10);
    for (let j = 0; j < savedPropsCount; j += 1) {
      writer.write({
        id: id += 1,
        property_id: Math.round(Math.random() * 10000000),
        // user ID will need to be joined in from collections
        list_id: parseResult[i].id,
        user_id: parseResult[i].user_id,
      });
    }
  }
  console.log('done');
};

const results = [];
fs.createReadStream('postgresCollectionsSeed.csv')
  .pipe(csv({}))
  .on('data', (data) => { results.push(data); })
  .on('end', () => {
    generateCollectionData(results);
  });

  //   Papa.parse(stream, {
  //     delimiter: ',',
  //     preview: 15,
  //     header: true,
  //     step: (data) => { console.log(data); },
  //     error: (err) => { throw err; },
  //   });
  // })
  // .on('error', (err) => { throw err; });

// Papa.parse('test.csv', {
//   delimiter: ',',
//   preview: 15,
//   header: true,
//   step: (results) => { console.log(results); },
// })