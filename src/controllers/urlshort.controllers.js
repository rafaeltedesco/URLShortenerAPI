const ShortURL = require('./../models/Url.model')
const validate = require('url-validator')
const db = require('./../database/db')

exports.redirectURL = async (req, res) => {
  try {
    let {short} = req.params
  
    let [url] = await ShortURL.find({short})
    if (!url) throw new Error('Url not found')
    
    let {clicks} = url

    clicks++

    await url.update({ clicks })

    return res.redirect(url.full)
  }
  catch(err) {
    res.status(400).json({
      status: 'fail',
      error: `${err}`
    })
  }

}


exports.getAll = async (req, res) => {
  try {
    const query = ShortURL.find({})
    const urls = await query.select('full short clicks')
    return res.status(200).json({
      status: 'success',
      results: urls.length,
      data: urls
    })
  }
  catch(err) {
    return res.status(400).json({
      status: 'fail',
      message: `${err}`
    })
  }
}

exports.shortURL = async (req, res)=> {
  try {
    let {full} = req.body

    if (!validate(full)) throw new Error('Invalid URL')
  
    const newUrl = await ShortURL.create({full: full})
    
    return res.status(200).json({
      status: 'success',
      message: 'Url was shortned'
    })
  }
  catch(err) {
    return res.status(400).json({
      status: 'fail',
      message: `${err}`
    })
  }
}


exports.delete = async (req, res)=> {
  try {
    let {short} = req.params
    
    let url = await ShortURL.deleteOne({ short })
    console.log(url.deletedCount)
    if (!url.deletedCount) {
      throw new Error('Data not found')
    }
    return res.status(204).json({
      status: 'success',
      message: 'Deleted'
    })

  }
  catch(err) {
    return res.status(400).json({
      status: 'fail',
      error: `${err}`
    })
  }
 
}