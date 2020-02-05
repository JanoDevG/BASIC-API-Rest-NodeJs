const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get('/', (req, res) => {
    res.send(req.headers);

    res.send("funciona get")
})

router.post('/message', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("dale")

})

app.listen(port || process.env.port);
console.log(`escuchando desde ${port || process.env.port}`);