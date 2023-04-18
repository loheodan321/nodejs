const requestHandler = require('./routes');

const http = require('http');

const server = http.createServer(requestHandler.handlerRequest);

server.listen(3000);
