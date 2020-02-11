const db = require('mongoose');

//MongoDB connection script...
//mongodb+srv://Alejandro:<password>@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    })
    console.log('Mongo Conectado');
}

module.exports = connect;