const UserModel = require('../model/user')
const jwt = require('jsonwebtoken')

const path=require('path')

const signupform=async(req,res)=>{

  let pat = path.join(__dirname, "../")
    res.sendFile(`${pat}public/html/signup.html`)
}


const loginform=async(req,res)=>{

  let pat = path.join(__dirname, "../")
    res.sendFile(`${pat}public/html/login.html`)
}


const logoutform=async(req,res)=>{

  let pat = path.join(__dirname, "../")
    res.sendFile(`${pat}public/html/logout.html`)
}



const base64 = require("js-base64")
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY ,
    api_secret:process.env.API_SECRET ,
    secure: true
})

const signUpController = async (req, res) => {
    
  const userdata = req.body
  const filedata = req.file
  console.log(userdata);
  console.log(filedata);

  if (filedata) {
      
      const base64FileData = base64.encode(filedata.buffer)
     
      cloudinary.uploader.upload(`data:${filedata.mimetype};base64,${base64FileData}`,
          async function (error, response) {
              if (error) {
                  res.status(500).send({ status: "Error Occured in uploading file" })

                  
              }
              
              userdata.image_url = response.secure_url
              try {
                  const result = await UserModel.create(userdata)

                  const userPayload = userdata 

                  const token = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
                  res.cookie('jwt', token, { maxAge: 900000 })
                  res.redirect("/profile")
                
                  
              }
              catch (err) {
                  console.log(err)
                  res.send(err.errors)

              }

          })
  }


}



const loginController = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email, password })

    if (!user) {
      res.status(401).send({ status: 'error', msg: 'User Not Found' })
    }


  //   const token1 = req.cookies.jwt

  // if (token1) {
    
  //     const userData = jwt.verify(token, process.env.AUTH_SECRET_KEY)
  //     console.log(userData)
  //     return res.redirect("/profile")
    
  //   }
    

    const userPayload = { email, password }

    
    const token = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
    res.cookie('jwt', token, { maxAge: 900000 })
    res.redirect("/profile")

  } catch (err) {
    res.status(401).send({ status: 'error', msg: err })
  }
}

const logoutController = (req, res) => {
  res.cookie('jwt', '', { maxAge: 3000 })
  res.send({ status: 'success', msg: 'Logged out successfully' })
}

module.exports = {
  loginController,
  logoutController,
  signUpController,
  signupform,
  loginform,
  logoutform

  
}
