const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const passwordIsValid = require('../composables/passwordIsValid.js')
const getToken = require('../composables/getToken.js')

exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      return res.status(404).send({ message: 'User not found' })
    }

    if (!passwordIsValid(req, user)) {
      return res
        .status(401)
        .send({ accessToken: null, message: 'Invalid Password!' })
    }

    res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: getToken(user)
    })
  })
}

exports.register = (req, res) => {
  const payload = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  }

  User.findOne({ username: payload.username }, (err, user) => {
    if (user) {
      res.status(401).send({ message: 'user allready exists' })
    } else {
      const newUser = new User(payload)
      newUser.save()
      res.status(200).send({ message: 'new user added' })
    }
  })
}
