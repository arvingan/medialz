var mysqldata = require('mysql');
var connection = mysqldata.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mojie'
});
module.exports = connection;