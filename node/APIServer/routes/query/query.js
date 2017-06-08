var express = require('express');
var router = express.Router();
//配置数据库
var mysql = require('mysql');
var config = require('../config/mysql');
var connection = mysql.createConnection(config.mysqlConfig);
//连接
var URL = require('url');
//查询用户
//http://127.0.0.1:3000/q/phone?phone=18017057704
router.get('/phone', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(params.phone) != "undefined") {
		connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
			var response = {
				status: 0000,
				data: results,
				hint:"账户查询成功"
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
//查询场次 0结束 1开通
//http://127.0.0.1:3000/q/session?type=1
router.get('/session', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(params.type) != "undefined") {
		connection.query('SELECT * FROM session WHERE type = ?', [params.type], function(err, results) {
			var response = {
				status: 0000,
				data: results,
				hint:"场次查询成功"
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