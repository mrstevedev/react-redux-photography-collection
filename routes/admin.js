const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers');

router.post('/signin', controllers.signIn)

module.exports = router;