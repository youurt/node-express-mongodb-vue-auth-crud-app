const updateProfile = (User, _id, body, res) => {
  User.findByIdAndUpdate(_id, body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id=${_id}. Maybe user was not found!`
        })
      } else {
        res.status(200).send({
          message: 'profile was updated successfully!'
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating user with id=' + _id
      })
    })
}

module.exports = updateProfile
