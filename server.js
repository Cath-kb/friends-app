'use strict';

const http = require('http');
const staticServer = require('node-static');
const file = new staticServer.Server('.');
const data = require('./data.js');

http.createServer(function(req, res) {
    if (req.url == '/hello') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control':'no-cache'
        });

        res.end('Hi!');
    } else if (req.url == '/photos') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Cache-Control':'no-cache'
        });

        res.end(JSON.stringify(data));
    } else {
        file.serve(req, res);
    }
}).listen(3000);

console.log('Server running on port 3000');
