const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'groceryList'
});

module.exports = connection;