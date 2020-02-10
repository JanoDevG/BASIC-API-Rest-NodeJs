const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        require: true
    },
    date: Date
})

const model = mongoose.model('Message', mySchema);
module.exports = model;