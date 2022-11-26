const express = require("express")
const app = express()

const path = require('path')

//load all key-value pairs in .env file to proces.env object
require('dotenv').config() 

const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')

//connect to DB
initDB()

//express.urlencoded() will accept the form data from the postman
app.use(express.urlencoded({extended:true}))

//express.json() will accept the json data from the postman
app.use(express.json())             

app.use(cookieParser())

//express.static('public') will accept the public file
app.use(express.static('public'))



const customerRouter = require('./routes/customers')
const userRouter = require('./routes/users')
const paymentRouter = require('./routes/payments')

app.get("/",(req,res)=>{
    res.send(`Hello  
    It is a BACKEND for businessmen and general people which helps to organise the ledgers in one app, so that you do not require a big book to organise all the credit accounts. It’s a kind of paperless ledger.
It will also serve free SMSs to the customers for reminding about the owed money.
It is a secure platform and saves the shopkeeper’s as well as the customer’s time along with increasing the credibility of the credit system.
If you want signup goto "localhost:8000/signup" URL`)
})

//importing user realted route
 app.use('/' , userRouter)

//importing customer related route
app.use('/customers' , customerRouter)

// Importing payments related route
app.use('/payments', paymentRouter)

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})