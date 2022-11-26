const EmployeeModel = require('../models/employees')

const getEmployees = async (req, res) => {

  try {
    const employees = await EmployeeModel.find();
    res.send({ status: 'success', employees })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}


const getEmployeesByID = async (req, res) => {
  const { EmployeeID } = req.params

  const Employee = await EmployeeModel.findById(EmployeeID)
  if (Employee) {
    res.send(Employee)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postEmployees = async (req, res) => {
  const EmployeesData = req.body
  try {
    const result = await EmployeeModel.create(EmployeesData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateEmployeeById = async (req, res) => {

  const { EmployeeID } = req.params
  const updatedEmployeeData = req.body //{language, name, id}

  try {
    const updatedResult = await EmployeeModel.findByIdAndUpdate(EmployeeID, updatedEmployeeData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteEmployeeByID = async (req, res) => {
  const { EmployeeID } = req.params

  const deletedData = await EmployeeModel.findByIdAndDelete(EmployeeID)
  res.send(deletedData)
}


module.exports = {
  getEmployees,
  getEmployeesByID,
  postEmployees,
  updateEmployeeById,
  deleteEmployeeByID
}