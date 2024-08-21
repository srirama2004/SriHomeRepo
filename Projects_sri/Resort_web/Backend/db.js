const { Pool } = require("pg");
// const pool = new Pool({
//   user: "postgres",
//   password: "123456",
//   host: "localhost",
//   port: 5432, // default Postgres port
//   database: "postgres",
// });

const pool = new Pool({
  user: "ascscs",
  password: "@7sdDgVUuhCXjD6",
  host: "postgresql-ascscs.alwaysdata.net",
  port: 5432, // default Postgres port
  database: "ascscs_resortdb12",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};