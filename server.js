'use strict'

const http = require('http');
const staticServer = require('node-static');
const file = new staticServer.Server('.');

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(3000);

console.log('Server running on port 3000');