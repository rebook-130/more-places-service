CREATE DATABASE sdc_more_places;

/* USE sdc_more_places; */

/*-- table for user accounts (each account has many collections) */
CREATE TABLE users(
  id BIGINT NOT NULL UNIQUE,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

/* each collection has many saved properties */
CREATE TABLE collections(
  id BIGINT NOT NULL UNIQUE,
  user_id BIGINT NOT NULL,
  collection_name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
  /* count INT, -- calculated field */

/* each saved property is subortinated to a user an a collection. can have the same property in multiple collections here. */
CREATE TABLE saved_prop(
  id BIGINT NOT NULL UNIQUE,
  PRIMARY KEY (id),
  property_id BIGINT NOT NULL,
  FOREIGN KEY (property_id) REFERENCES properties(id),
  list_id BIGINT NOT NULL,
  FOREIGN KEY (list_id) REFERENCES collections(id),
  user_id BIGINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


/* each property has many (or no) saved properties */
CREATE TABLE properties(
  id BIGINT NOT NULL UNIQUE,
  photo_url VARCHAR(300),
  descrip VARCHAR(500),
  superhost INT,
  rating VARCHAR(10),
  review_count INT,
  room_type VARCHAR(50),
  beds INT,
  price FLOAT,
  location VARCHAR(200),
  PRIMARY KEY (id)
);


/*
LOAD SCRIPTS

COPY users (id, name) FROM '/Users/jamesscolamieri/work/system-design-capstone/more-places-service/bigSeed/dataCSVs/bothDBMS/users.csv' WITH (FORMAT csv, HEADER TRUE,  DELIMITER ',');

COPY properties (property_id, photoUrl, descrip, superhost, rating, review_count, beds, price, location) FROM '/Users/jamesscolamieri/work/system-design-capstone/more-places-service/bigSeed/dataCSVs/bothDBMS/propertySeed.csv' WITH (FORMAT csv, HEADER TRUE,  DELIMITER ',');

COPY collections (id, user_id, collection_name) FROM '/Users/jamesscolamieri/work/system-design-capstone/more-places-service/bigSeed/dataCSVs/bothDBMS/propertySeed.csv' WITH (FORMAT csv, HEADER TRUE,  DELIMITER ',');

COPY saved_prop (id, property_id, user_id, list_id)
FROM '/Users/jamesscolamieri/work/system-design-capstone/more-places-service/bigSeed/dataCSVs/postgres/a.csv'
WITH (FORMAT csv, HEADER TRUE,  DELIMITER ',');
*/