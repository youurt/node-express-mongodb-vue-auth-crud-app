const { ObjectId } = require('mongodb')
const getIdFromParams = (req) => {
  return ObjectId(req.params.id)
}

module.exports = getIdFromParams
