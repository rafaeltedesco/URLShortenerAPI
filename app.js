require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
app.use('/api/v1/shortUrl', require('./src/routes/urlshort.routes'))


module.exports = app