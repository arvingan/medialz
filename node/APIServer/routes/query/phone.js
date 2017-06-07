var express = require('express');
var router = express.Router();
//配置数据库
var mysql = require('mysql');
var config = require('../config/mysql');
var connection = mysql.createConnection(config.mysqlConfig);
//连接
var URL = require('url');
router.get('/phone', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(params.phone) != "undefined") {
		connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
			var response = {
				status: 0000,
				data: results
			};
			res.send(JSON.stringify(response));
		})

	} else {
		var response = {
			status: 4000,
			hint: '参数错误'
		};
		res.send(JSON.stringify(response));
	}
});

module.exports = router;