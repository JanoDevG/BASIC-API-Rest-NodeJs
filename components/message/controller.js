const moment = require('moment'); //librería para requerir fechas
const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[addMessage] no se ingresaron usuario y mensaje');
            reject('se requiere usuario y mensaje');
            return false;
        }
        console.log(user);
        console.log(message);
        const fullMessage = {
            user: user,
            message: message,
            date: moment().format('DD/MM/YYYY HH:mm')
        }
        console.log(fullMessage);
        resolve(fullMessage);
        store.add(fullMessage);
    });
};

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages
};