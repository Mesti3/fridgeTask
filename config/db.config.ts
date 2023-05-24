const { Client } = require('pg')
const { stg} = require('../env/stg.config');

module.exports.getClient = async () => {

  const client = new Client({
    user: stg.db_user,
    host: stg.db_host,
    database: stg.db_database,
    password: stg.db_password,
    port: stg.db_port,
    // connectionTimeoutMillis: 10000,
  });


  await client.connect();
  return client;
};
