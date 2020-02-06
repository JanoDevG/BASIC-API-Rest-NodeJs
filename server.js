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

router.post('/message', (req, res)=>{
    console.log(req.query);
    console.log(req.body);
    res.status(201).send({
        errorr: '',
        body: 'creado correctamente'
    });
})

app.listen(3000);
console.log('escuchando desde 3000');