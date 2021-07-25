const User = require('../models/user.model.js')
const checkForToken = require('../composables/checkForToken.js')
const getIdFromParams = require('../composables/getIdFromParams.js')
const verifyToken = require('../composables/verifyToken.js')
const updateProfile = require('../composables/updateProfile.js')
const getProfile = require('../composables/getProfile.js')

exports.userUpdate = (req, res) => {
  checkForToken(req, res)
  verifyToken(
    req,
    res,
    updateProfile(User, getIdFromParams(req), req.body, res)
  )
}

exports.userGet = (req, res) => {
  checkForToken(req, res)
  verifyToken(req, res, getProfile(User, getIdFromParams(req), res))
}
