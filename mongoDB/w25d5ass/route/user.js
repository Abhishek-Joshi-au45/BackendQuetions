const express=require('express')

const {  profile } = require('../controller/user')

const userRouter=express.Router()

const{authMiddleware}=require("../middleware/auth")


userRouter.use(authMiddleware)

userRouter.get("/profile", profile)



module.exports=userRouter