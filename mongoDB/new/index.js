const express = require('express')
const app = express()

const { initDB } = require('./dbConfig')

require('dotenv').config()

const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(express.static('public'))

const usersRouter = require('./routes/user')

initDB()

app.use(cookieParser())

app.use('/',usersRouter)

app.listen(8000,()=>{
    console.log('Server started successfully')
})


