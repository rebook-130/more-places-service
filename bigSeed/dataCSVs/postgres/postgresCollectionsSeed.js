const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const collectionNames = ['myList', 'myCollection', 'Dream Homes', 'favorites', 'exciting homes', 'cool area', 'places to visit', 'list', 'random', 'untitled', 'saved', 'dream vacation', 'inspiration', 'cool decor', 'inviting', '11/2021', 'march vacay'];

// for 100k users, try between 0 and 20 collections per user
// for each collection try 2-20 saved properties
// 100000 * 10 * 10 ~~ 10M saved properties;

const generateCollectionData = () => {
  let count = 0;
  let id = 0;
  writer.pipe(fs.createWriteStream('postgresCollectionsSeed.csv'));

  for (let i = 0; i < 1000000; i += 1) {
    count += 1;
    const collectionCount = Math.round(Math.random() * 10);
    for (let j = 0; j < collectionCount; j += 1) {
      writer.write({
        id: id += 1,
        user_id: count,
        collection_name: collectionNames[Math.floor(Math.random() * collectionNames.length)],
      });
    }
  }
};

generateCollectionData();
