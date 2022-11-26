const parentsModel = require('../models/parents')

const getParent = async (req, res) => {

  try {
    const parents = await parentsModel.find();
    res.send({ status: 'success', parents })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching' })
  }
}


const getParentByID = async (req, res) => {
  const { ID } = req.params

  const parent = await parentsModel.findById(ID)
  if (parent) {
    res.send(parent)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postParent = async (req, res) => {
  const parentdata = req.body
  try {
    const result = await parentsModel.create(parentdata)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateParentById = async (req, res) => {

  const { ID } = req.params
  const updatedParentData = req.body 

  try {
    const updatedResult = await parentsModel.findByIdAndUpdate(ID, updatedParentData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteParentByID = async (req, res) => {
  const { ID } = req.params

  const deletedData = await parentsModel.findByIdAndDelete(ID)
  res.send(deletedData)
}


module.exports = {
  getParent,
  getParentByID,
  postParent,
  updateParentById,
  deleteParentByID
}