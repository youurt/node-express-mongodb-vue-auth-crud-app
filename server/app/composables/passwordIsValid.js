const bcrypt = require('bcryptjs')

const passwordIsValid = (req, user) => {
  return bcrypt.compareSync(req.body.password, user.password)
}

module.exports = passwordIsValid
