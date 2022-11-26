const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    // lowercase: true,
    maxLength: 50
  },
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars'
  }]
})

//collectionName, Schema
const CustomerModel = mongoose.model('Customer', CustomerSchema)

module.exports = CustomerModel