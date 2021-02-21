const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = process.env.DB_URI || 'mongodb://localhost:27017/urlShort'

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err)=> {
  if (err) throw err
  console.log('Connected to db')
})

module.exports = mongoose.connection