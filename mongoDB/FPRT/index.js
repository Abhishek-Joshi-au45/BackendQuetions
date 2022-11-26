const express = require("express")
const app = express()

const path = require('path')

const blogsModel = require('./models/blog')
const usersModel = require('./models/user')

require('dotenv').config()

const { initDB } = require('./dbConfig')

const usersRouter = require('./routes/user')
const blogsRouter = require('./routes/blog')

const authRouter = require('./routes/auth')

const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(express.static('public'))

initDB()

app.use(cookieParser())

app.get('/',(req,res)=>{
    let pat = path.join(__dirname,'./')
    res.sendFile(`${pat}public/index.html`)
})

// app.get('/blogs',(req,res)=>{
//     let pat = path.join(__dirname,'./')
//     res.sendFile(`${pat}public/addBlog.html`)
// })

app.use('/',authRouter)

app.use('/users',usersRouter)

app.use('/blogs',blogsRouter)


app.listen(8000,()=>{
    console.log("Server started at port 8000")
})