const fs = require('fs');
const csvWriter = require('csv-write-stream');
// const Papa = require('papaparse');
// const path = require('path');
const csv = require('csv-parser');

const writer = csvWriter();

// for 100k users, try between 0 and 20 collections per user
// for each collection try 2-20 saved properties
// 100000 * 10 * 10 ~~ 10M saved properties;

const generateCollectionData = (parseResult) => {
  writer.pipe(fs.createWriteStream('cassCollectionsByPropertySeed.csv'));
  // take however many collections, and loop that many times

  for (let i = 0; i < parseResult.length; i += 1) {
    writer.write({
      property_id: parseResult[i].property_id,
      // user ID will need to be joined in from collections
      user_id: parseResult[i].user_id,
      collection_name: parseResult[i].collection_name,
    });
  }
};

const results = [];
fs.createReadStream('cassCollectionsByUserSeed.csv')
  .pipe(csv({}))
  .on('data', (data) => { results.push(data); })
  .on('end', () => {
    generateCollectionData(results);
  });
