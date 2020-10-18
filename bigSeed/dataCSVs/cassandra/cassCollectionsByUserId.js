const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const collectionNames = ['myList', 'myCollection', 'Dream Homes', 'favorites', 'exciting homes', 'cool area', 'places to visit', 'list', 'random', 'untitled', 'saved', 'dream vacation', 'inspiration', 'cool decor', 'inviting', '11/2021', 'march vacay'];

// for 100k users, try between 0 and 20 collections per user
// for each collection try 2-20 saved properties
// 100000 * 10 * 10 ~~ 10M saved properties;

const generateCollectionData = () => {
  let usersCount = 0;
  writer.pipe(fs.createWriteStream('postgresCollectionsSeed.csv'));

  // each of 1M users
  for (let i = 0; i < 1000000; i += 1) {
    usersCount += 1;

    // between 0 and 10 collections per user
    const collectionCount = Math.round(Math.random() * 10);
    for (let j = 0; j < collectionCount; j += 1) {
      const name = collectionNames[Math.floor(Math.random() * collectionNames.length)];

      // between 0 and 5 properties on each list
      for (let k = 0; k < Math.floor(Math.random() * 6); k += 1) {
        writer.write({
          user_id: usersCount,
          collection_name: name,
          property_id: Math.floor(Math.random() * 10000000),
          photo_url: `https://more-places-photos.s3.us-east-2.amazonaws.com/property${Math.ceil(Math.random() * 924)}.jpg`,
        });
      }
    }
  }
};

generateCollectionData();
