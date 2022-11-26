const studentsModel = require('../models/students')

const getStudents = async (req, res) => {

  try {
    const students = await studentsModel.find();
    res.send({ status: 'success', students })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching' })
  }
}


const getStudentByID = async (req, res) => {
  const { ID } = req.params

  const student = await studentsModel.findById(ID)
  if (student) {
    res.send(student)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postStudent = async (req, res) => {
  const studentdata = req.body
  try {
    const result = await studentsModel.create(studentdata)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateStudentById = async (req, res) => {

  const { ID } = req.params
  const updatedStudentData = req.body 

  try {
    const updatedResult = await studentsModel.findByIdAndUpdate(ID, updatedStudentData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteStudentByID = async (req, res) => {
  const { ID } = req.params

  const deletedData = await studentsModel.findByIdAndDelete(ID)
  res.send(deletedData)
}


module.exports = {
  getStudents,
  getStudentByID,
  postStudent,
  updateStudentById,
  deleteStudentByID
}