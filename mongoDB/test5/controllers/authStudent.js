const studentsModel = require('../models/students')
const jwt = require('jsonwebtoken')

const path = require('path')

const signUpController = async (req, res) => {
  const { name, rollNumber, standard, photoURL,address,parents} = req.body

  try {
    const newStudent = await studentsModel.create({  name, rollNumber, standard, photoURL,address,parents })
    res.send({ status: 'success', user: newStudent })
  } catch (err) {
    res.status(500).send(err)
  }
}

const loginController = async (req, res) => {
  const { rollNumber ,name} = req.body

  try {
    const student = await studentsModel.findOne({ rollNumber,name })

    if (!student) {
      res.status(401).send({ status: 'error', msg: 'Student Not Found' })
    }
    //user is verfied

    const studentPayload = { name }

    //token creation payload, secret key, optional - algo, expirationTime
    
    const token = jwt.sign(studentPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
    res.cookie('jwt', token, { maxAge: 900000 })
    res.send({ status: 'Login Succesfully' })

  } catch (err) {
    res.status(401).send({ status: 'error', msg: err })
  }
}

const updateController = async (req,res)=>{
  // const { ID } = req.params
  const updatedStudentData = req.body 

  try {
    const updatedResult = await studentsModel.findOneAndReplace( updatedStudentData)
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}

const logoutController = (req, res) => {
  res.cookie('jwt', '', { maxAge: 3000 })
  res.send({ status: 'success', msg: 'Logged out successfully' })
}



const loginPage = (req,res)=>{
  let pat = path.join(__dirname,'../')

  res.sendFile(`${pat}public/login.html`)
}

const signupPage = (req,res)=>{
  let pat = path.join(__dirname,'../')

  res.sendFile(`${pat}public/signup.html`)
}

const logout = (req,res)=>{
  let pat = path.join(__dirname,'../')

  res.sendFile(`${pat}public/logout.html`)
}

const updatePage = (req,res)=>{
  let pat = path.join(__dirname,'../')

  res.sendFile(`${pat}public/update.html`)
}

module.exports = {
  loginController,
  logoutController,
  signUpController,
  loginPage,
  signupPage,
  logout,
  updatePage,
  updateController
}