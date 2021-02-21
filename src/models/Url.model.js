const {Schema, model} = require('mongoose')
const shortid = require('shortid')
const ShortURLSchema = new Schema({
  full: {
    type: String,
    required: [true, 'Must send a full URL'],
    unique: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate()
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = model('ShortURL', ShortURLSchema)