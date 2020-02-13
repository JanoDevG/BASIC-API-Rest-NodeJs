const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://Alejandro:1234@backendnodejs-3efrj.gcp.mongodb.net/test?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost'
}

module.exports = config;