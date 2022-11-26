const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  emp_name: {
    type: String,
    required: true
  },
  job_name: {
    type: String,
    required: true
  },
  hire_date: {
    type: Date ,
    // required: true
  },
  salary: {
    type: Number,
    required: true,
  }
})

const UserModel = mongoose.model('Employees', userSchema)
module.exports = UserModel