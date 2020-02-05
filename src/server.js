const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send("hola");
})

app.listen(3000);
console.log("app escuchando en 3000");