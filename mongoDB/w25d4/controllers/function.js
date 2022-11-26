const UserModel = require('../models/schema')
const jwt = require('jsonwebtoken')
const path = require('path')

const signUpController = async (req, res) => {
  const { emp_name, job_name, hire_date, salary} = req.body

  try {
    const newUser = await UserModel.create({ emp_name, job_name, hire_date, salary })
    res.send({ status: 'success', user: newUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

const loginController = async (req, res) => {
  const { emp_name, salary } = req.body

  try {
    const user = await UserModel.findOne({ emp_name, salary })

    if (!user) {
      res.status(401).send({ status: 'error', msg: 'User Not Found' })
    }
    //user is verfied

    const userPayload = { emp_name }

    //token creation 
    const accessToken = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })

    res.cookie('jwt', accessToken, { maxAge: 900000 })
    res.send({ status: 'success' })

  } catch (err) {
    res.status(401).send({ status: 'error', msg: err })
  }
}

const logoutController = (req, res) => {

}

const loginPage = (req,res)=>{
    let pat = path.join(__dirname,'../')

    res.sendFile(`${pat}public/login.html`)
}

const signupPage = (req,res)=>{
    let pat = path.join(__dirname,'../')

    res.sendFile(`${pat}public/signup.html`)
}
module.exports = {
  loginController,
  logoutController,
  signUpController,
  loginPage,
  signupPage
}