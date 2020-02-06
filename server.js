const express = require('express');
const router = require('./network/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const response = require('.');

router(app); //a nuestro router importado desde './network/routes' se le pasa app

app.use('/app', express.static('public'));

app.listen(3000);
console.log('escuchando desde 3000');