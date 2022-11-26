const express = require('express')
const { signUpController, loginController, logoutController, signupPage, loginPage } = require('../controllers/function')

const authRouter = express.Router()

// authRouter.get('/signup',) //html to signup

authRouter.get('/signup', signupPage)
authRouter.get('/login', loginPage)

authRouter.post('/signup', signUpController)
authRouter.post('/login', loginController)
authRouter.post('/logout', logoutController)


module.exports = authRouter