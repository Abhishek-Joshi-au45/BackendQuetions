const express = require('express')
 const authRouter = require('./routes/auth')
require('dotenv').config()
const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')
const studentRouter = require('./routes/students')
const parentRouter = require('./routes/parents')


const path = require('path')


const app = express()
initDB()


//middlewares
app.use(express.json())

app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))

app.use(cookieParser())

//add auth routes

 app.use('/', authRouter)

//routes 


app.use('/students', studentRouter)

app.use("/parents", parentRouter)


app.listen(8000, () => {
  console.log("Server Started at 8000 Successfully")
})




