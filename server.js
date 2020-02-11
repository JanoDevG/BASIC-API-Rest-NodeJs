const express = require('express');
const router = require('./network/routes');
const app = express();

const db = require('./db');

db('mongodb+srv://Alejandro:1234@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const response = require('.');

router(app); //a nuestro router importado desde './network/routes' se le pasa app

app.use('/app', express.static('public'));

app.listen(3000);
console.log('escuchando desde 3000');