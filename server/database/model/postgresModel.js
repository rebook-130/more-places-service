/* eslint-disable */

// get user properties
// SELECT property_id, collections.collection_id, collection_name, collections.user_id, save_id
//   FROM saved_prop
//   INNER JOIN collections ON saved_prop.collection_id = collections.collection_id
//   WHERE saved_prop.user_id = 500100
//   AND collections.user_id = 500100;

// create a new collection
exports.createCollection = (user_id, collection_name) =>
const queryString = `INSERT INTO collections(user_id, collection_name) VALUES (400000, 'testyMcTest')`

// lookup whether a single property is saved, should return 1 row is saved, 0 if not
SELECT * FROM saved_prop WHERE user_id = 1 AND property_id = 10;

//OR
//lookup all saved property
//for a user, cache on client app state 0 if not
SELECT * FROM saved_prop WHERE user_id = 1;

// get 12 random listings
// this one doesn't work for some reason SELECT * FROM properties WHERE property_id < (SELECT ROUND (RANDOM() * (SELECT MAX(property_id) FROM properties)))LIMIT 12;
SELECT * FROM properties WHERE property_id < random_id AND property_id > random_id + 13 LIMIT 12;

// Saved a property to a users collection
INSERT INTO saved_prop (property_id, collection_id, user_id) VALUES (9287976, 1, 1);

// unsave property from a list
DELETE FROM saved_prop WHERE user_id=1 AND collection_id=1 AND property_id=9287976;
