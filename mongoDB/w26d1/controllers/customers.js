const CustomerModel = require('../models/customers')

const getCustomers = async (req, res) => {

  try {
    const customers = await CustomerModel.find();
    res.send({ status: 'success', customers })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching customers' })
  }
}


const getCustomerByID = async (req, res) => {
  const { customerID } = req.params

  const customer = await CustomerModel.findById(customerID, { name: 1 }).populate('cars', { cars: 1 })
  if (customer) {
    res.send(customer)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postCutomer = async (req, res) => {
  const cutomerData = req.body
  try {
    const result = await CustomerModel.create(cutomerData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateCustomerById = async (req, res) => {

  const { customerID } = req.params
  const updatedCustomerData = req.body //{language, name, id}

  try {
    const updatedResult = await CustomerModel.findByIdAndUpdate(customerID, updatedCustomerData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteCustomerByID = async (req, res) => {
  const { customerID } = req.params

  const deletedData = await CustomerModel.findByIdAndDelete(customerID)
  res.send(deletedData)
}


module.exports = {
  getCustomers,
  getCustomerByID,
  postCutomer,
  updateCustomerById,
  deleteCustomerByID
}