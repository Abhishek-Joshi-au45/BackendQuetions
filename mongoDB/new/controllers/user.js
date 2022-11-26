const usersModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')

const getSignupUser = (req,res)=>{
  let pat = path.join(__dirname,'../')
  res.sendFile(`${pat}public/signup.html`)
}

const getLoginuser = (req,res)=>{
  let pat = path.join(__dirname,'../')
  res.sendFile(`${pat}public/login.html`)
}

const getLogoutusers = (req,res)=>{
  let pat = path.join(__dirname,'../')
  res.sendFile(`${pat}public/logout.html`)
}

const loginUser = async (req,res)=>{
    const { email , password } = req.body
    const hashedPass = await bcrypt.hash(password, 5)
    try{
        const user = await usersModel.findOne({email,hashedPass})
        if(!user){
            res.status(401).send({status: 'error', msg: 'user not found'})
        }
        // user is verified

        const userPayload = { email }

        const token = jwt.sign(userPayload,process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
        res.cookie('jwt',token,{maxAge: 900000})
        // res.redirect('/')
       
        res.send({status: 'success' , user})
    }catch(err){
        res.status(401).send({ status: 'error', msg: err })
    }
}

const signupUser = async (req, res) => {

    const { name, email, password,mobile,Category,time} = req.body
      const hashedPass = await bcrypt.hash(password, 5)
        try {
          const newUser = await usersModel.create({ name, email, password: hashedPass ,mobile,Category,time})
         // res.redirect('/login')
         res.send({ status: 'success', success : 'Thank you for reaching out to us, we will connect with you on specified time'})
        } catch (err) {
          res.status(500).send(err)
        }
      }





const logoutUser = async(req, res)=>{
res.cookie('jwt','',{maxage: 3000})
res.send({status: 'succes', msg: 'Log out Successfully'})
}

module.exports={
    loginUser,
    logoutUser,
    signupUser,
    getLoginuser,
    getLogoutusers,
    getSignupUser
}