const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.get('/photos.json', controllers.getAPI)

module.exports = router;