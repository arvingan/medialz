var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mojie'
});
function myuser(data){
	if(typeof(data)!="undefined"){
		console.log(data);
		res.end(data);
	}else{
		console.log("用户不存在,请注册")
	}
	//connection.end()
};

var queryUser=function(userId){
	
	console.log(userId)
	var userquery =connection.query('SELECT * FROM users WHERE phone = ?', [userId], function(err, results) {
    myuser(results[0]);
	})
}

exports.qUser=queryUser;
