var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port:3307
});

/* GET home page. */
//post发送+请求get获取
router.post('/navlist', function(req, res, next) {
    //通过SELECT拿到的数据rows形参
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT * FROM body.navlist', function(err, rows, fields) { 
        res.send(rows)
    });
});

router.post('/newslist', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    //var id=req.body.id;    
    connection.query('SELECT * FROM body.newslist1', function(err, rows, fields) { 
        res.send(rows)
    });
});

router.post('/newslistxq', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var id=req.body.id;    
    console.log(id)
    connection.query('SELECT xiangqing FROM body.newslist1 WHERE id='+id, function(err, rows, fields) { 
        res.send(rows)
    });
});
module.exports = router;
