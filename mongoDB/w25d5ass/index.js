const express=require("express")

const app=express()
require('dotenv').config()

const {initDB}=require("./dbConfig")
initDB()
const cookieParser = require('cookie-parser')
const authRouter=require('./route/auth')
const userRouter=require('./route/user')



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))



app.use('/', authRouter)

app.use("/" , userRouter)







app.listen("8000", ()=>{
    console.log("server has connected ");
})