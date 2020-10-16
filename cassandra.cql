CREATE KEYSPACE IF NOT EXISTS more_places
  WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor' : 3};

USE more_places;


-- query first table schemas
-- to get 12 random properties query properties by listing id and get listing data
CREATE TABLE IF NOT EXISTS properties_by_id (
  listing_id bigint,
  photoURL text,
  descrip text,
  rating float,
  review_count int,
  beds smallint,
  price float,
  PRIMARY KEY (listing_id)
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
CREATE TABLE IF NOT EXISTS collections_by_property (
  user_id bigint,
  property_id bigint,
  collection_name text,
  PRIMARY KEY(user_id, property_id)
);