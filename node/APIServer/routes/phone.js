//
var express = require('express');
var router = express.Router();
//配置数据库
var mysql = require('mysql');
var config = require('./mysql');
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);
//连接
var URL = require('url');
router.get('', function(req, res, next) {
			var params = URL.parse(req.url, true).query;
			if(typeof(params.phone) != "undefined") {
				pool.getConnection(function(err, connection) {
						connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
							var response = {
								status: 0000,
								data: phone.qPhonereturn(results[0])
							};
							res.send(JSON.stringify(response));
						})
				})

				}
				else {
					var response = {
						status: 4000,
						hint: '参数错误'
					};
					res.send(JSON.stringify(response));
				}

				//输出

			});

		module.exports = router;