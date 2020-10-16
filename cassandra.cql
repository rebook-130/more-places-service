CREATE KEYSPACE IF NOT EXISTS more_places WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor' : 3};

USE more_places;


-- query first table schemas
-- to get 12 random properties query properties by listing id and get listing data
-- when seeding, require 10M records. if we distribute 20 partition ids, this may optimize the querying. It may be trial and error.
CREATE TABLE IF NOT EXISTS properties_by_id (
  partition_id int,
  listing_id bigint,
  photoURL text,
  descrip text,
  rating float,
  review_count int,
  beds smallint,
  price float,
  PRIMARY KEY (partition_id, listing_id)
);




-- to get user collections or add a user's collection, query collections by user
CREATE TABLE IF NOT EXISTS collections_by_id (
  user_id bigint,
  collection_name text,
  saved_property text,
  property_count int,
  photo_url text,
  PRIMARY KEY(user_id, collection_id)
);

-- to get a property's specific collection, query collections by property
-- CREATE TABLE IF NOT EXISTS collections_by_property (
--   user_id bigint,
--   property_id bigint,
--   collection_name text,
--   PRIMARY KEY(user_id, property_id)
-- );

-- OR --

-- to get a property's collection (would need write and remove each time a listing is added )
CREATE TABLE IF NOT EXISTS properties_by_id (
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

