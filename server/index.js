
'use strict';

var app = require('./app'),
  db = require('./db');

var port = 8080;
// app.use('/', function(req, res){
// 	res.send("fuck off");
// })

var server = app.listen(port, function () {
  console.log('HTTP server patiently listening on port', port);
});

module.exports = server;