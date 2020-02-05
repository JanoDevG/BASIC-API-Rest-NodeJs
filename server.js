const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res)=>{
    console.log(req.headers);
    res.header({"valor-propio": "agregando valor propio"}); //header personalizado
    res.send('lista de mensajes');
});

router.delete('/message', (req, res)=>{
    console.log(req.query);
    console.log(req.body);
    res.send('eliminado correctamente el mensaje: '+ req.body.text);
})

app.listen(3000);
console.log('escuchando desde 3000');