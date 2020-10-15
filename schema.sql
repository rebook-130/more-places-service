

CREATE TABLE users(
  id BIGINT NOT NULL UNIQUE,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id),
)

CREATE TABLE saved_list(
  id BIGINT NOT NULL UNIQUE,
  name VARCHAR(40) NOT NULL,
  count INT NOT NULL,
  user_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE saved_prop(
  id BIGINT NOT NULL UNIQUE,
  PRIMARY KEY (id),
  property_id BIGINT NOT NULL,
  FOREIGN KEY (property_id) REFERENCES properties(id),
  list_id BIGINT NOT NULL,
  FOREIGN KEY (list_id) REFERENCES saved_list(id),
  user_id BIGINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),

)

CREATE TABLE propertoes(
  id BIGINT NOT NULL UNIQUE
)
