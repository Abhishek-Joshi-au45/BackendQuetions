const express = require('express')
const path = require('path')

const {  loginUser,logoutUser, signupUser } = require('../controllers/loginUser')

const authRouter = express.Router()

// authRouter.get('/signup',) //html to signup

authRouter.get('/signup',(req,res)=>{
    let pat = path.join(__dirname,'../')
    res.sendFile(`${pat}public/signup.html`)
})

authRouter.get('/login',(req,res)=>{
    let pat = path.join(__dirname,'../')
    res.sendFile(`${pat}public/login.html`)
})

authRouter.get('/logout',(req,res)=>{
    let pat = path.join(__dirname,'../')
    res.sendFile(`${pat}public/logout.html`)
})




authRouter.post('/signup', signupUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)

module.exports = authRouter