const express = require('express')
const { getStudents,   getStudentByID, postStudent,  updateStudentById, deleteStudentByID } = require('../controllers/students');
const { authMiddleware } = require('../middelwares/auth');
// const { loginController, logoutController } = require('../controllers/authStudent')
 const authRouter = require('./auth');
const studentRouter = express.Router()
// const {loginPage, signupPage} = require("../controllers/authStudent")
 

//  studentRouter.post('/login', loginController)
//  studentRouter.post('/logout', logoutController)



studentRouter.use(authMiddleware)

studentRouter.get('/:ID', getStudentByID);
studentRouter.get('/', getStudents);
studentRouter.post('/', postStudent);
studentRouter.put('/:ID', updateStudentById);
studentRouter.delete('/:ID', deleteStudentByID);

module.exports = studentRouter
