const express = require('express')
const { getCustomers, getCustomerByID, postCutomer, updateCustomerById, deleteCustomerByID } = require('../controllers/customers');
const { addCar } = require('../controllers/cars');
const customerRouter = express.Router()

customerRouter.get('/', getCustomers);
customerRouter.get('/:customerID', getCustomerByID);
customerRouter.post('/', postCutomer);
customerRouter.put('/:customerID', updateCustomerById);
customerRouter.delete('/:customerID', deleteCustomerByID);

customerRouter.post('/:customerID/cars', addCar);

module.exports = customerRouter