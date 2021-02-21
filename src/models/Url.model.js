const {Schema, model} = require('mongoose')

const ShortURLSchema = new Schema({
  full: {
    type: String,
    required: [true, 'Must send a full URL'],
    unique: true,
  },
  short: {
    type: String,
    required: true,
    unique: true
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})


module.exports = model('ShortURL', ShortURLSchema)