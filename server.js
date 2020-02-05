const express = require('express');
const router = express.Router();
const app = express();

app.use(router);

router.get('/message', (req, res)=>{
    res.send('hola desde get');
})

router.post('/message', (req, res)=>{
    res.send('hola desde post');
})

app.listen(3000);
console.log('escuchando desde 3000');