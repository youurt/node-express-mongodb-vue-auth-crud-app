const jwt = require('jsonwebtoken')

const getToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_KEY, {
    expiresIn: 86400
  })
}

module.exports = getToken
