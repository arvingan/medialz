var phone = require('./query/phone');
//
var express = require('express');
var router = express.Router();
//配置数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mojie'
});
//连接
var URL = require('url');
router.get('/Phone', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(data.phone)!="undefined") {
		connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
			var response = {
				status: 0000,
				data: phone.qPhonereturn(results[0])
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

	//输出

});

module.exports = router;