const { Pool } = require("pg");
const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  }

};

const pool = new Pool(config);

module.exports = { query: (sql, values, cb) => pool.query(sql, values, cb)};

console.log("this is index.js");