const express = require('express')
const { loginController, logoutController, signUpController, loginPage, signupPage,logout,updatePage,updateController} = require('../controllers/authStudent')
const path = require('path')
const { findOneAndUpdate } = require('../models/parents')

const authRouter = express.Router()

// authRouter.get('/signup',) //html to signup

authRouter.get('/signup', signupPage)
authRouter.get('/login', loginPage)
authRouter.get('/update' , updatePage)
authRouter.get('/logout' ,logout)

authRouter.post('/signup', signUpController)
authRouter.post('/login', loginController)
authRouter.post('/logout', logoutController)
authRouter.put('/logout' ,updateController)

module.exports = authRouter
