const express = require('express');
const http = require('http');

const configs = require('./src/configs');

const app = express();
const server = http.createServer(app);

require('./src/loaders')(app, server, configs);

server.listen(configs.main.port, configs.main.host, () => {
    return console.log(`Server listening to PORT:${configs.main.port}`)
});

module.exports = server;