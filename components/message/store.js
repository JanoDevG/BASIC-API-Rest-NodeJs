const db = require('mongoose');
const Model = require('./model')

//MongoDB connection script...
//mongodb+srv://Alejandro:<password>@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://Alejandro:1234@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
console.log('Mongo Conectado');

//Agregar
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
};

//obtener
async function getMessage() {
    const message = await Model.find();
    return message;
};

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText
}