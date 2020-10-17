// cassandra seeding script

// properties_by_id

const fs = require('fs');
const csvWriter = require('csv-write-stream');
// const faker = require('faker');

const writer = csvWriter();

const partition_ids = [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];

// const roomType = ['Entire Place', 'Shared Room', 'Private Room', 'Hotel Room', 'Entire Villa', 'Entire Guesthouse', 'Entire Cottage', 'Entire Apartment', 'Private Studio'];
// const description = ['Central Location!', 'Comfy and Quaint!', 'Very quiet neighborhood', '100% Private!', 'Ultra Luxury Room', '420 Friendly Stay!', 'Cozy and Comfortable', 'Wake up to spectacular views', 'Panoramic Views', 'Spacious', 'Exquisite and Close to everything!', 'Stunning Views', 'Lovers Paradise', 'Minimalist Dream', 'Beautiful Midcentury Oasis', 'Contemporary Dream', 'Earthy Modernist Home', 'Large Private Area'];

const template = {
  adjective: ['Central', 'Very quiet', '100% Private', 'Exquisite', '420 Friendly', 'Earthy', 'Cozy', 'Comfortable', 'Stunning', 'Minimalist', 'Beautiful', 'Modernist', 'Private', 'Sunny', 'Shady', 'Exciting', 'Lively', 'Centrally Located', 'Colorful', 'Inexpensive', 'Pet-friendly', 'Scenic', 'Desert', 'Haunted', 'Spooky', 'Crooked', 'Gigantic'],
  place: ['Location', 'Room', 'Views', 'Dream', 'Oasis', 'Area', 'House', 'Stay', 'Home', 'Condo', 'Condominum', 'Getaway', 'Apartment', 'Mansion', 'Flat', 'Cabin', 'little slice of heaven'],
  attributes1: ['Pool', 'Garden', 'Balcony', 'Yard', 'kitchen'],
  attributes2: ['in the woods', 'in space', 'in heaven', 'in city', 'in vibrant neighborhood'],
  punctuation: ['!', '', '', '', ''],
};

const location = ['San Diego', 'Malibu', 'Los Angeles', 'Big Bear Lake', 'Joshua Tree', 'Palm Springs', 'Crestline', 'Newport', 'Pasadena', 'Santa Barbara', 'San Francisco', 'Granada', 'Berkeley', 'San Jose', 'Long Beach', 'Santa Monica', 'Anaheim', 'Burbank', 'Sacramento', 'Hundleby', 'Yucca Valley', 'Salisbury', 'Sutton', 'Lake Arrowhead'];

// const generateData = () => {
//   let counter = 0;
//   writer.pipe(fs.createWriteStream('data.csv'));
//   for (let i = 0; i < 10000000; i += 1) {
//     writer.write({
//       partition_id: partition_ids[Math.floor(Math.random() * 19)],
//       property_id: counter += 1,
//       photoUrl: `http://aws.com/${'hello'}`,
//       descrip: 'description',
//       rating: (Math.random() * 2) + 3,
//       review_count: Math.floor(Math.random() * 1000),
//       beds: Math.ceil(Math.random() * 8),
//       price: Math.ceil(Math.random() * 8),
//       location: location[Math.floor(Math.random() * location.length)],
//     });
//   }
// };

const randomDescription = () => {
  let adjIndex1 = template.adjective[Math.floor(Math.random() * template.adjective.length)];
  if (!Math.round(4 * Math.random())) {
    adjIndex1 = adjIndex1.toUpperCase();
  }
  const placeIndex = template.place[Math.floor(Math.random() * template.place.length)];
  const attribIndex = template.attributes1[Math.floor(Math.random() * template.attributes1.length)];
  const puncIndex = template.punctuation[Math.floor(Math.random() * template.punctuation.length)];
  const adjIndex2 = template.adjective[Math.floor(Math.random() * template.adjective.length)];
  let adj = '';
  let propAttrib = '';

  if (!Math.round(Math.random())) {
    adj = ` with ${adjIndex2} ${attribIndex} `;
  }
  if (Math.round(Math.random() * 3)) {
    propAttrib = template.attributes2[Math.floor(Math.random() * template.attributes2.length)];
  }
  let string = `${adjIndex1} ${placeIndex}${adj}${propAttrib}${puncIndex}`;

  if (!Math.round(10 * Math.random())) {
    string = string.toUpperCase();
  }
  return string;
};

// should create 2080 combinations

for (let i = 0; i < 100; i += 1) {
  console.log(randomDescription());
}