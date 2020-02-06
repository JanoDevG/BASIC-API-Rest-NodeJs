const express = require('express');
const router = express.Router();
const response = require('../../network/response')

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({ "valor-propio": "agregando valor propio" }); //header personalizado
    response.success(req, res, 'lista de mensajes');
});

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if(req.query.error == 'ok'){
        response.error(req, res, 'error inesperado', 400, 'simulando errores para ver por logs');
    }else{
        response.error(req, res, 'creado correctamente', 201);
    }
})

module.exports = router;