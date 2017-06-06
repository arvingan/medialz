//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//res.statusCode = 200;
//res.setHeader('Content-Type', 'text/plain');
//res.end('Hello World22\n');
//});
//
//server.listen(port, hostname, () => {
//console.log(`服务器运行在 http://${hostname}:${port}/`);
//});

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true).query.phone));
}).listen(3000);