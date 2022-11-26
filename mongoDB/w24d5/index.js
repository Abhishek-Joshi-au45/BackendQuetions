const express = require('express')
const app = express()

require('dotenv').config() //load all key-value pairs in .env file to proces.env object
const employeeRouter = require('./routes/employees')

app.use(express.json())

const { initDB } = require('./dbConfig')

//connect to DB
initDB()

app.use('/Employees', employeeRouter)

app.listen(8000,()=>{
    console.log("Server started at 80000")
})
