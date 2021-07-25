const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./app/models')
const dbConfig = require('./app/config/db.config')
const indexRouter = require('./app/routes/index.js')
// const authRouter = require('./app/routes/auth.js')
// const userRouter = require('./app/routes/user')
require('dotenv').config()

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.')
  })
  .catch((err) => {
    console.error('Connection error', err)
    process.exit()
  })

app.use('/', indexRouter)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
