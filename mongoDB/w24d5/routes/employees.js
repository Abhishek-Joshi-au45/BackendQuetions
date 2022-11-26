const express = require('express')
const { getEmployees, getEmployeesByID, postEmployees, updateEmployeeById, deleteEmployeeByID } = require('../controllers/function')
const employeeRouter = express.Router()

employeeRouter.get('/', getEmployees);
employeeRouter.get('/:EmployeeID', getEmployeesByID);
employeeRouter.post('/', postEmployees);
employeeRouter.put('/:EmployeeID', updateEmployeeById);
employeeRouter.delete('/:EmployeeID', deleteEmployeeByID);

module.exports = employeeRouter
