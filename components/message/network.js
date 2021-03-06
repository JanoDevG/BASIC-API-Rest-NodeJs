const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
const multer = require('multer');

const upload = multer({
  dest: 'public/files/'
});

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

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file) //imprimir información del archivo
  controller.addMessage(req.body.user, req.body.message, req.file)
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
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'error inesperado', 500, e);
    })
})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `usuario: ${req.params.id} fue eliminado`, 200);
    })
    .catch(e => {
      response.error(req, res, 'error interno', 500, e);
    })
})

module.exports = router;
