const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ilgesnistiltas",
  database: "user_data"
});