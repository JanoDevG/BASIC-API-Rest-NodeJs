const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');

router.get('/', (req, res) => {
  const filterMessage = req.query.user || null;
  console.log(req.headers);
  controller.getMessages(filterMessage)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error (error en get de network', 500, e);
      console.log("[Error metodo get de network]: " + e);
    })
});

router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'información inválida', 400, 'error en el controlador')
    })
})

router.patch('/:id', (req, res) => {  //nos llega el  id
  console.log(`se está consultando el id: ${req.params.id}`);
  controller.updateMessage(req.params.id, req.body.message)  //se envían los datos al método updateMessage del controlador
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'error inesperado', 500, e)
    })
})
module.exports = router;
