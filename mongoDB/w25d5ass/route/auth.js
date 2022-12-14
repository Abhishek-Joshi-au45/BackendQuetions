const express = require('express')

const multer  = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const { signUpController, loginController, logoutController, signupform, loginform, logoutform } = require('../controller/auth')

const authRouter = express.Router()



authRouter.get("/signup", signupform)
authRouter.get("/login", loginform)
authRouter.get("/logout", logoutform )

authRouter.post('/signup',upload.single("image_url"), signUpController)
authRouter.post('/login', loginController)
authRouter.post('/logout', logoutController)


module.exports = authRouter