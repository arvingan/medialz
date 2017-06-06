var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mojie'
});


var queryUser= function(userId){
	var userquery =connection.query('SELECT * FROM users WHERE phone = ?', [userId], function(err, results) {

    console.log(results)
	})
}
queryUser(18017057704)
