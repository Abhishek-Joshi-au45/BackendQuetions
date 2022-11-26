const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 50
  },
  Email: {
    type: String,
    required:true
  }
})

//collectionName, Schema
const UsersModel = mongoose.model('Users', UserSchema)

module.exports = UsersModel
