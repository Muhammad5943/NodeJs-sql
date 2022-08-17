const express = require('express')
require('express-group-routes')

const cors = require('cors')
const app = express()
const logger = require("./utils/logger")
const morgan = require('morgan')
require('dotenv').config()
const { sequelize } = require('./models')

const PORT = process.env.PORT
var corsOptions = {
    origin: "*"
}

// cors for proxy to using api
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// use morgan for server logging
app.use(morgan('dev'))

require('./config/passport')
require('./routes')(app)

sequelize.sync()
  .then(() => {
    console.log("Database connected")
    app.listen(PORT, () => {
      logger.info(`server running on port http://localhost:${PORT}`)
  })
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })