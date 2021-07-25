const checkForToken = (req, res) => {
  if (!req.headers['x-access-token']) {
    return res.status(403).send({ message: 'No token provided' })
  }
}

module.exports = checkForToken
