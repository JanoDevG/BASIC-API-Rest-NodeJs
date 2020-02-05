const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res)=>{
    res.send('hola desde get');
})

router.delete('/message', (req, res)=>{
    console.log(req.query);
    console.log(req.body);
    res.send('eliminado correctamente el mensaje: '+ req.body.text);
})

app.listen(3000);
console.log('escuchando desde 3000');