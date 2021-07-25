const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController.js')

router.post('/profile/:id', controller.userUpdate)

router.get('/profile/:id', controller.userGet)

module.exports = router
