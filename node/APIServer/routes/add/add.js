var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//配置数据库
var mysql = require('mysql');
var config = require('../config/mysql');
var connection = mysql.createConnection(config.mysqlConfig);
//连接
var URL = require('url');
//注册
//http://127.0.0.1:3000/a/register?phone=01&name=01&sex=1
router.get('/register', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(params.phone) != "undefined" && typeof(params.name) != "undefined") {
		connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
			if(results.length !== 0) {
				//已注册
				var response = {
					status: 3000,
					hint: "已注册"
				};
				res.send(JSON.stringify(response));
			} else {
				var regiserData = {
					phone: params.phone,
					name: params.name,
					sex: typeof(params.sex) != "undefined" ? params.sex : "",
					size: typeof(params.size) != "undefined" ? params.size : "",
					job: typeof(params.job) != "undefined" ? params.job : ""
				}
				//注册
				var addRSql = 'INSERT INTO users(Id,phone,name,sex,size,job) VALUES(0,?,?,?,?,?)';
				var addRSqlParams = [regiserData.phone, regiserData.name, regiserData.sex, regiserData.size, regiserData.job];
				connection.query(addRSql, addRSqlParams, function(err, result) {
					if(result) {
						var response = {
							status: 0000,
							hint: "注册成功"
						};
						res.send(JSON.stringify(response));
					} else {
						var response = {
							status: 4000,
							hint: "注册失败",
							data: regiserData,
							err: err
						};
						res.send(JSON.stringify(response));

					}
				});

			}

		})

	} else {
		var response = {
			status: 4000,
			hint: '参数错误'
		};
		res.send(JSON.stringify(response));
	}
});

//添加场次
router.post('/addS', function(req, res, next) {
	var params = JSON.parse(req.body.json) ;
	if(typeof(params.sessionname) != "undefined" && typeof(params.type) != "undefined") {
		params.sessiontime=typeof(params.sessiontime) != "undefined"?params.sessiontime:"null"
		var addSql = 'INSERT INTO session(Id,sessionname,sessiontime,type) VALUES(0,?,?,?)';
		//INSERT INTO `mojie`.`session` (`id`, `sessionname`, `sessiontime`, `type`) VALUES (NULL, '测试', '222', '1');
		var addSqlParams = [params.sessionname,params.sessiontime,params.type];
		connection.query(addSql, addSqlParams, function(err, result) {
			if(result) {
				var response = {
					status: 0000,
					data: result,
					hint: "添加成功"
				};
				res.send(JSON.stringify(response));
			} else {
				var response = {
					status: 0000,
					hint: "添加失败"
				};
				res.send(JSON.stringify(response));

			}
		});
	} else {
		var response = {
			data:params,
			status: 4000,
			hint: '参数错误'
		};
		res.send(JSON.stringify(response));
	}
})
//编辑场次
router.post('/editS', function(req, res, next) {
	var params = JSON.parse(req.body.json) ;
	if(typeof(params.sessionname) != "undefined" && typeof(params.type) != "undefined") {
		params.sessiontime=typeof(params.sessiontime) != "undefined"?params.sessiontime:"null"
		var addSql = 'UPDATE session SET sessionname = ?,sessiontime = ?,type=? WHERE id = ?';
		var addSqlParams = [params.sessionname,params.sessiontime,params.type,params.id];
		connection.query(addSql, addSqlParams, function(err, result) {
			if(result) {
				var response = {
					status: 0000,
					data: result,
					hint: "修改成功"
				};
				res.send(JSON.stringify(response));
			} else {
				var response = {
					status: 0000,
					hint: "修改失败"
				};
				res.send(JSON.stringify(response));
			}
		});
	} else {
		var response = {
			data:params,
			status: 4000,
			hint: '参数错误'
		};
		res.send(JSON.stringify(response));
	}
})
//参加
//http://127.0.0.1:3000/a/join?phone=02&sessionid=2
router.get('/join', function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	if(typeof(params.phone) != "undefined" && typeof(params.sessionid) != "undefined") {
		//查询用户信息
		connection.query('SELECT * FROM users WHERE phone = ?', [params.phone], function(err, results) {
			if(results.length !== 0) {
				var joinData = {
					phone: params.phone,
					name: results[0].name,
					sex: results[0].sex,
					size: results[0].size,
					job: results[0].job,
					sessionid: params.sessionid,
					queuenumber: 1,
				}
				//查询是否参加过
				connection.query('SELECT * FROM queue WHERE phone = ? and sessionid = ?', [params.phone, params.sessionid], function(err, results) {
					//已经参加
					if(results.length !== 0) {
						var response = {
							status: 0000,
							data: results[0],
							hint: "已参加"
						};
						res.send(JSON.stringify(response));
					} else {

						//查询puepue排序
						connection.query('SELECT * FROM queue WHERE sessionid = ? order by queuenumber desc limit 1', [params.sessionid], function(err, results) {
							if(results.length !== 0) {
								joinData.queuenumber = results[0].queuenumber * 1 + 1
							}
							//添加队列
							var addSql = 'INSERT INTO queue(Id,phone,name,sex,size,job,queuenumber,sessionid) VALUES(0,?,?,?,?,?,?,?)';
							var addSqlParams = [joinData.phone, joinData.name, joinData.sex, joinData.size, joinData.job, joinData.queuenumber, joinData.sessionid];
							connection.query(addSql, addSqlParams, function(err, result) {
								if(result) {
									var response = {
										status: 0000,
										data: joinData,
										hint: "参加成功"
									};
									res.send(JSON.stringify(response));
								} else {
									var response = {
										status: 0000,
										hint: "参加失败"
									};
									res.send(JSON.stringify(response));

								}
							});
						})
					}
				})
				//join

			} else {
				//未注册
				var response = {
					status: 3000,
					hint: "未注册"
				};
				res.send(JSON.stringify(response));

			}

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