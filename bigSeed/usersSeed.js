// cassandra seeding script

// properties_by_id

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

let counter = 0;

const generateUserData = () => {
  writer.pipe(fs.createWriteStream('users.csv'));
  for (let i = 0; i < 10000000; i += 1) {
    writer.write({
      id: counter += 1,
      name: faker.name.findName(),
    });
  }
};

generateUserData();
