const express = require('express');
const router = require('./network/routes');
const app = express();
const socket = require('./socket');
const server = require('http').Server(app);


const db = require('./db');

db('mongodb+srv://Alejandro:1234@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);
router(app); //a nuestro router importado desde './network/routes' se le pasa app

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log('servidor encendido')
});