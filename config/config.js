const path = require('path')

module.exports = {
    port: process.env.DB_PORT,
    db: {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        options: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST
        //   storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET
    }
}
