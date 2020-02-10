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

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('invalid data');
            console.log('[Error updateMessage de controller]')
            return false;
        }
        const result = await store.updateText(id, message)
        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('id inválido');
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};