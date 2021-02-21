const express = require('express')
const urlController = require('./../controllers/urlshort.controllers')
const router = express.Router()

router.route('/')
.get(urlController.getAll)
.post(urlController.shortURL)

router.route('/:short')
.get(urlController.redirectURL)
.delete(urlController.delete)

module.exports = router