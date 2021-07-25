const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      return res.status(404).send({ message: 'User not found' })
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: 'Invalid Password!' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
      expiresIn: 86400
    })

    res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: token
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
