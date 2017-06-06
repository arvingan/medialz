var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mojie'
});
var quserdata="11";

var queryUser= function(userId){

	var userquery =connection.query('SELECT * FROM users WHERE phone = ?', [userId], function(err, results) {
    //return results;
    //console.log(quserdata);
    quserdata=results[0];
    return quserdata;
	})
	
	return quserdata;
}
console.log(queryUser(18017057704));

//var userId = 18017057704;
//exports.qUser=queryUser;
//console.log(userquery);
// SELECT * FROM users WHERE id = 1, name = 'test'
connection.end();