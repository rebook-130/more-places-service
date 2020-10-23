/* eslint-disable array-bracket-spacing */
/* eslint-disable camelcase */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'more_places',
});

const generate12propertyIds = () => {
  const result = [];
  for (let i = 0; i < 12; i += 1) {
    result.push(Math.round(Math.random() * 10000000));
  }
  return result;
};

module.exports = {
  getListings: (callback) => {
    const query = 'SELECT * FROM properties_by_id WHERE property_id IN (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = generate12propertyIds();
    client.execute(query, params, { prepare: true }, callback);
  },
  getCollectionsByUser: (user_id) => {
    const query = 'SELECT * FROM collections_by_user WHERE user_id = ?';
    const params = [ user_id ];
    client.execute(query, params)
      .then((result) => console.log('User has a collection called: ', result.rows[0].collection_name));
  },
  saveProperty: (user_id, collection_name, property_id, photo_url) => {
    const queries = [
      {
        query: 'INSERT INTO collections_by_user(user_id, collection_name, photo_url, property_id)  VALUES (?, ?, ?, ?)',
        params: [ user_id, collection_name, property_id, photo_url ],
      },
      {
        query: 'INSERT INTO collections_by_properties_id(user_id, property_id, collection_name) VALUES (?, ?, ?)',
        params: [ user_id, property_id, collection_name ],
      },
    ];
    const queryOptions = { prepare: true, consistency: cassandra.types.consistencies.localQuorum };
    client.batch(queries, queryOptions)
      .then(() => console.log('Data updated on cluster'));
  },
};

// for batch queries

// const queries = [
//   {
//     query: 'UPDATE user_profiles SET email=? WHERE key=?',
//     params: [emailAddress, 'hendrix'],
//   },
//   {
//     query: 'INSERT INTO user_track (key, text, date) VALUES (?, ?, ?)',
//     params: ['hendrix', 'Changed email', new Date()],
//   },
// ];
// const queryOptions = { prepare: true, consistency: cassandra.types.consistencies.localQuorum };

// client.batch(queries, queryOptions)
//   .then(() => console.log('Data updated on cluster'));

console.log(generate12propertyIds());
