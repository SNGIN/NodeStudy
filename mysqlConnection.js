var mysql = require('mysql');

var dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Ani7N14Ani',
  database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;