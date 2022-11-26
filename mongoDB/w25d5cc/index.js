const { application } = require('express')
const express = require('express')
require('dotenv').config()

const { initDB } = require('./dbConfig')
const authRouter = require('./routes/route')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

initDB()

app.use(express.json())

app.use('/', authRouter)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(8000,()=>{
    console.log('Server is started at 8000')
})