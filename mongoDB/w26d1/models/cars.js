const mongoose = require('mongoose')


const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  customer :{
    type: String,
    require: true
  }
})

//collectionName, Schema
const CarModel = mongoose.model('cars', carSchema)

module.exports = CarModel