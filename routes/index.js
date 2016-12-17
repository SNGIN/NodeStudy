//使うモジュールの宣言
var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

/*getが来た時に行うメソッド(データベースの値を表示)*/
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM boards';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'はじめてのNode.js',
      boardList: rows
    });
  });
});

/*postが来た時にデータベースに書き込み*/
router.post('/', function(req, res, next) {
  var title = req.body.title;
  //console.log(title);
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  var query = 'INSERT INTO boards (title) VALUES ("'+title+'")';
  console.log(query);
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});
module.exports = router;
