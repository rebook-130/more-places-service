/* eslint-disable array-bracket-spacing */
/* eslint-disable camelcase */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'more_places',
});

// helper
const generate12propertyIds = () => {
  const result = [];
  for (let i = 0; i < 12; i += 1) {
    result.push(Math.round(Math.random() * 10000000));
  }
  return result;
};

exports.getListings = (callback) => {
  const query = 'SELECT * FROM properties WHERE property_id IN (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const params = generate12propertyIds();
  client.execute(query, params, { prepare: true }, callback);
};

exports.getCollectionsByUser = (user_id, callback) => {
  const query = 'SELECT collection_name, photo_url FROM collections_by_user WHERE user_id = ?';
  const params = [ user_id ];
  client.execute(query, params, { prepare: true }, callback);
};

exports.saveProperty = (data, callback) => {
  // console.log(data.collection_name);
  const queries = [
    {
      query: 'INSERT INTO collections_by_user(user_id, collection_name, property_id, photo_url)  VALUES (?, ?, ?, ?)',
      params: [ data.user_id, data.collection_name, data.property_id, data.photo_url ],
    },
    {
      query: 'INSERT INTO collections_by_properties_id(user_id, property_id, collection_name) VALUES (?, ?, ?)',
      params: [ data.user_id, data.property_id, data.collection_name ],
    },
  ];
  const queryOptions = { prepare: true };
  client.batch(queries, queryOptions, callback);
};

exports.unsaveProperty = (data, callback) => {
  const queries = [
    {
      query: 'DELETE FROM collections_by_user WHERE user_id = ? AND collection_name = ? AND property_id = ?',
      params: [ data.user_id, data.collection_name, data.property_id ],
    },
    {
      query: 'DELETE FROM collections_by_properties_id WHERE user_id = ? AND property_id = ?',
      params: [ data.user_id, data.property_id ],
    },
  ];
  const queryOptions = { prepare: true };
  client.batch(queries, queryOptions, callback);
};

exports.getSavedProperty = (data, callback) => {
  const query = 'SELECT * FROM collections_by_properties_id WHERE user_id = ? AND property_id = ? LIMIT 1';
  const params = [ data.user_id, data.property_id ];
  client.execute(query, params, { prepare: true }, callback);
};
