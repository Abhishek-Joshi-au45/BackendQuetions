const usersModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')

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
        res.redirect('/')
       
       // res.send({status: 'success' , user})
    }catch(err){
        res.status(401).send({ status: 'error', msg: err })
    }
}

const signupUser = async (req, res) => {

    const { name, email, password,image } = req.body
      const hashedPass = await bcrypt.hash(password, 5)
        try {
          const newUser = await usersModel.create({ name, email, password: hashedPass , image})
          res.redirect('/login')
         // res.send({ status: 'success', user: newUser })
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
    signupUser
}