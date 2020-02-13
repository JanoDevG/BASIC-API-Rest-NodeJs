const express = require('express');
const router = require('./network/routes');
const app = express();
const socket = require('./socket');
const server = require('http').Server(app);
const config = require('./config');

const db = require('./db');

db(config.dbUrl);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);
router(app); //a nuestro router importado desde './network/routes' se le pasa app

app.use('/app', express.static('public'));

server.listen(config.port, () => {
    console.log('servidor encendido: ' + config.host + ':' + config.port)
});