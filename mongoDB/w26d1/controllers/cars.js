const CustomerModel = require("../models/customers")
const CarModel = require("../models/cars")

const addCar = async (req, res) => {
  const { car } = req.body
  const { customerID } = req.params
  //1. // add new document in Review Model
  try {
    const car = await CarModel.create(req.body)

    // Get the _id
    // push the _id in movie collection
    const customerDoc = await CustomerModel.findByIdAndUpdate(customerID, {
      $push: {
        cars: car._id
      }
    })
    console.log(car)
    res.send({ status: 'success' })
  } catch (err) {
    console.log(err)
    res.send({ status: 'error' })
  }
}

module.exports = {
  addCar
}