const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome in this api.' })
})
// --------------------------------------------------

module.exports = router
