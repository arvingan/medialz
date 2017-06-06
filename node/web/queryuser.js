var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mojie'
});
 


var userId = 18017057704;
var userquery = connection.query('SELECT * FROM users WHERE phone = ?', [userId], function(err, results) {
    //return results;
    console.log(results);
});
//console.log(userquery);
// SELECT * FROM users WHERE id = 1, name = 'test'
connection.end();