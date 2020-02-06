const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const response = require('./response');
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({ "valor-propio": "agregando valor propio" }); //header personalizado
    response.success(req, res, 'lista de mensajes');
});

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if(req.query.error == 'ok'){
        response.error(req, res, 'error inesperado', 400);
    }else{
        response.error(req, res, 'creado correctamente', 400);
    }
})

app.listen(3000);
console.log('escuchando desde 3000');