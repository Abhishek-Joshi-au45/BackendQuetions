const mongoose = require('mongoose')


const EmployeesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    // lowercase: true,
    maxLength: 50
  },
  Joining_date : {
    type: Date,
    default: Date.now()
  },
  Employees_id: {
    type: Number,
    default: 0,
    required:true
  },
  Designation :{
    type: String,
    maxLength: 50
  }
})

//collectionName, Schema
const EmployeeSModel = mongoose.model('Employees', EmployeesSchema)

module.exports = EmployeeSModel