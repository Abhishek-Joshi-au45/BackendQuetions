const express = require('express')
const path = require('path')

const {  loginUser,logoutUser, signupUser ,getLoginuser,getSignupUser,getLogoutusers} = require('../controllers/user')

const usersRouter = express.Router()

// authRouter.get('/signup',) //html to signup

usersRouter.get('/signup',getSignupUser)

usersRouter.get('/login',getLoginuser)

usersRouter.get('/logout',getLogoutusers)

usersRouter.get('/',(req,res)=>{
    res.send('Home Routes')
})


usersRouter.post('/signup', signupUser)
usersRouter.post('/login', loginUser)
usersRouter.post('/logout', logoutUser)

module.exports = usersRouter