const expensesModel = require('../models/expenses')

const getExpenses = async (req, res) => {

  try {
    const expenses = await expensesModel.find();
    res.send({ status: 'success', expenses })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching ' })
  }
}


const getExpensesbyID = async (req, res) => {
  const { id } = req.params

  const expense = await expensesModel.findById(id, { name: 1 })
  if (expense) {
    res.send(expense)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postExpenses = async (req, res) => {
  const expensesData = req.body
  try {
    const result = await expensesModel.create(expensesData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateExpenseById = async (req, res) => {

  const { id } = req.params
  const updatedData = req.body 

  try {
    const updatedResult = await expensesModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteExpenseByID = async (req, res) => {
  const { movieID } = req.params
try{
    const deletedData = await MovieModel.findByIdAndDelete(movieID)
  res.send(deletedData)
}
catch (err) {
    res.status(500).send(err)
  }
}


module.exports = {
  getExpenses,
  getExpensesbyID,
  postExpenses,
  updateExpenseById,
  deleteExpenseByID
}