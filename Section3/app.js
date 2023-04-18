var http = require('http');
var express = require('express');
var app = express();
app.use(function (req, res, next) {
    console.log('oh shit its next');
    next();
});
app.use(function (req, res, next) {
    console.log('oh shit its another next');
});
var server = http.createServer(app);
server.listen(3000);
