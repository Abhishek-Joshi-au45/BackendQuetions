const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String ,
     required: true
  },
  phonenumber: {
    type: Number,
    required: true,
  }
})

const UserModel = mongoose.model('Employees', userSchema)
module.exports = UserModel