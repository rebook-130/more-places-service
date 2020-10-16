CREATE KEYSPACE IF NOT EXISTS more_places
  WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor' : 3};

USE more_places;


CREATE TABLE IF NOT EXISTS properties_by_id (
  listing_id bigint (PRIMARY KEY),
  photoURL text,
  descrip text,
  rating float,
  review_count int,
  beds smallint,
  price float,
)

CREATE TABLE IF NOT EXISTS collections_by_id (
  user_id bigint,
  collection_name text,
  saved_property text,
  property_count int,
  photo_url text,
  PRIMARY KEY(user_id, collection_id)
)

CREATE TABLE IF NOT EXISTS collections_by_property (
  user_id bigint,
  property_id bigint,
  collection_name text,
  PRIMARY KEY(user_id, property_id)
)





properties: {
  {
    "listing22834597": {
      "photoUrl": "http://aws.image.com"
      "descrip": "stay at a place",
      "superhost": true,
      "rating": 4.7,
      "review_count": 39,
      "room_type": "entire home",
      "beds": 3,
      "price": 98,
      "savedByUsers": [
        "1264935756954": [
          "mylist"
        ],
      ]
    }
  }
}

collections: {
  "1264935756954:mylist": {
    "saved_properties": [
      "listing22834597",
    ],
    "name": "mylist",
    "photoUrl": "http://aws.image.com"
  }
}