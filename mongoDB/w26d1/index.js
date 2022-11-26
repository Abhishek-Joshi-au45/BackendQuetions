const express = require('express')
const app = express()
require('dotenv').config() //load all key-value pairs in .env file to proces.env object
const customerRouter = require('./routes/customers')
const { initDB } = require('./dbConfig')

//middlewares
app.use(express.json())

//connect to DB
initDB()

app.use('/customers', customerRouter)

app.listen(8000, () => {
  console.log("Server Started Successfully at 8000")
})