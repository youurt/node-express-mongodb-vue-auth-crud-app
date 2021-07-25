const mongoose = require('mongoose')

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    password: String,
    github: String,
    twitter: String,
    email: String
  })
)

module.exports = User
