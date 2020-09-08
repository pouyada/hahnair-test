const env = process.env;
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE
})


mysqlConnection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Mysql Connection established');
})

module.exports = mysqlConnection;
