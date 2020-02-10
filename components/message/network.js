const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');

router.get('/', (req, res) => {
  console.log(req.headers);
  controller.getMessages()
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

module.exports = router;
