const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

// for 100k users, try between 0 and 20 collections per user
// for each collection try 2-20 saved properties
// 100000 * 10 * 10 ~~ 10M saved properties;

const generateCollectionData = () => {
  let collectionCount = 0;
  let id = 0;
  writer.pipe(fs.createWriteStream('postgresSavedPropsSeed.csv'));

  // take however many collections, and loop that many times

  for (let i = 0; i <= 5001116; i += 1) {
    collectionCount += 1;
    const savedPropsCount = Math.round(Math.random() * 10);
    for (let j = 0; j < savedPropsCount; j += 1) {
      writer.write({
        id: id += 1,
        property_id: Math.floor(Math.random() * 10000000),
        // user ID will need to be joined in from collections
        user_id: 0,
        list_id: collectionCount,
      });
    }
  }
};

generateCollectionData();
