const mongoose = require('mongoose')

const parentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    // required: true,
  },
designation : {
    type: String,
},
students: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'students'
}]
})

const parentsModel = mongoose.model('parents', parentsSchema)
module.exports = parentsModel
