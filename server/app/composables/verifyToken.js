const jwt = require('jsonwebtoken')

const verifyToken = (req, res, handleDb) => {
  jwt.verify(req.headers['x-access-token'], process.env.JWT_KEY, (err) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' })
    } else {
      handleDb
    }
  })
}

module.exports = verifyToken
