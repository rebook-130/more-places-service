CREATE KEYSPACE IF NOT EXISTS more_places WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor' : 3};

USE more_places;


-- query first table schemas
-- to get 12 random properties query properties by listing id and get listing data
-- when seeding, require 10M records. if we distribute 20 partition ids, this may optimize the querying. It may be trial and error.

  -- GET /api/more_places
      --> getListings: mongo.Listing.findRandom({}, {}, { limit: 12 }, callback)

CREATE TABLE IF NOT EXISTS properties_by_id (
  partition_id int, -- need feedback on this idea, adding constructed partition id to have more control over which listings records are added to which nodes
  listing_id bigint,
  photoURL text,
  descrip text,
  rating float,
  review_count int,
  beds smallint,
  price float,
  PRIMARY KEY (partition_id, listing_id)
);

-----------------------------------------------



-- to get user collections or add a user's collection, query collections by user

  -- GET /api/collections
      --> getLists: mongo.SavedLists.find({}, 'name photoUrl count time', callback)
  -- **PATCH /api/collections
      --> addToList: database.SavedLists.findOneAndUpdate({ name: data.name }, { $inc: { count: 1 } },).exec(callback))
      --> removeFromList: database.SavedLists.findOneAndUpdate({ name: data.name }, { $inc: { count: -1 } }).exec(callback))
  -- POST /api/collections
      --> createList: mongo.SavedLists.create(data, callback)
  -- DELETE /api/collections
      --> removeAllLists: mongo.SavedLists.deleteMany({})

CREATE TABLE IF NOT EXISTS collections_by_user (
  user_id bigint,
  collection_name text,
  saved_property text,
  property_count int, -- needs to be incremented for each row in the collection name
  photo_url text,
  PRIMARY KEY(user_id, collection_id)
);

-- to quickly ascertain the count properties in each  collection
-- CREATE TABLE IF NOT EXISTS counts_by_user_collection (
--   user_id bigint,
--   collection_name text,
--   property_count int,
--   PRIMARY KEY (user_id, collection_name)
-- );

---------------------------------------------------



-- to get a property's collection ( would need write and remove each time a listing is added )

  -- GET /api/properties/collection
      --> mongo.Listing.find({ houseId }, 'savedTo', callback)
  -- **PATCH api/collections
      --> addToList: mongo.Listing.findOneAndUpdate({ houseId: data.houseId }, { $set: data.update }).exec(callback)
      --> removeFromList: database.Listing.findOneAndUpdate({ houseId: data.houseId }, { $set: data.update },).exec(callback)

CREATE TABLE IF NOT EXISTS collections_by_properties_id (
  partition_id int,
  listing_id bigint,
  user_id bigint,
  collection_name,
  PRIMARY KEY (partition_id, listing_id)
);




-- propertys_by_id

-- partition_id  |   listing_id    |   descrip
-- 111           |   2549517356    |   "house in home staY space"
-- 112           |   6543543676    |   "blah balah"
-- 111           |   6513465017    |   "home in place"



-- in app

-- http://rebook.com/api/property/1112547517356/
-- '/api/property/1112547517356'
-- 111 : 2547517356
-- SELECT * FROM properties_by_id WHERE partition_id = 111 AND listing_id = 2547517356;

