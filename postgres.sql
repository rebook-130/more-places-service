CREATE DATABASE IF NOT EXISTS sdc-more-places;

USE sdc-more-places;

-- table for user accounts (each account has many collections)
CREATE TABLE IF NOT EXISTS users(
  id BIGINT NOT NULL UNIQUE,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id),
)

-- each collection has many saved properties
CREATE TABLE IF NOT EXISTS collections(
  id BIGINT NOT NULL AUTO INCREMENT,
  user_id BIGINT NOT NULL,
  collection_name VARCHAR(40) NOT NULL,
  --count INT, -- calculated field
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)

-- each saved property is subortinated to a user an a collection. can have the same property in multiple collections here.
CREATE TABLE IF NOT EXISTS saved_prop(
  id BIGINT NOT NULL UNIQUE,
  PRIMARY KEY (id),
  property_id BIGINT NOT NULL,
  FOREIGN KEY (property_id) REFERENCES properties(id),
  list_id BIGINT NOT NULL,
  FOREIGN KEY (list_id) REFERENCES saved_list(id),
  user_id BIGINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
)


-- each property has many (or no) saved properties
CREATE TABLE IF NOT EXISTS properties(
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
)