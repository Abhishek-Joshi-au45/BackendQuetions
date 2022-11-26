const express = require('express')
const app = express()

require('dotenv').config() //load all key-value pairs in .env file to proces.env object
//const employeeRouter = require('./routes/employees')

app.use(express.json())

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}));

const {getProductpage,getUserpage, postProduct, postUser , sendData} = require('./controllers/function')

const { initDB } = require('./dbConfig')

//connect to DB
initDB()

const path =require('path')

app.get('/product',getProductpage)

app.get('/user',getUserpage)

app.post('/user',postUser)

app.post('/product',postProduct)

app.get('/',sendData)


app.listen(8000,()=>{
    console.log("Server started at 8000")
})
