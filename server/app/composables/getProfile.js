const getProfile = (User, _id, res) => {
  User.findById(_id, (err, user) => {
    if (err || !user) {
      res.status(404).send({ message: 'no user with this is' })
    } else {
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        github: user.github,
        twitter: user.twitter
      })
    }
  })
}

module.exports = getProfile
