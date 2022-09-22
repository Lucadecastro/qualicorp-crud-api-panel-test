const connection = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./src/external/sqlite/database.sqlite"
  },
  useNullAsDefault: true,
});

export default connection;