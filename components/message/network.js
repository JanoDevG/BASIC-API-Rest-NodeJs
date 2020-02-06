const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({ "valor-propio": "agregando valor propio" }); //header personalizado
    response.success(req, res, 'lista de mensajes');
});

router.post('/', (req, res) => {
    const {user, message} = req.body;
    
   //var user = "hola"
   //var message = "algo"
   controller.addMessage(user, message);
    //if (req.query.error == 'ok') {
      //  response.error(req, res, 'error inesperado', 400, 'simulando errores para ver por logs');
    //} else {
  //      response.error(req, res, 'creado correctamente', 201);
//    }
})

module.exports = router;