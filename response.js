exports.success = function (req, res, message, status) {
    res.status(200 || status).send({
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status) {
    res.status(500 || status).send({
        error: message,
        body: ''
    });
}