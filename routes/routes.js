const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers');
const authenticatePhotos = require('../util/authenticatePhotos');

router.get('/photos', authenticatePhotos, controllers.getAPI)

module.exports = router;