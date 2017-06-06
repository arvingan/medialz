var queryuser=require('./queryuser')

//queryuser.qUser('18017057704');

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    
    queryuser.qUser(url.parse(req.url, true).query.phone);
         
    // 响应文件内容
    response.write(data.toString());
    response.end();
}).listen(3000);


