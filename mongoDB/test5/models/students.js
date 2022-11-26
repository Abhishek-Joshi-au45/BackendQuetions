const mongoose = require('mongoose')


const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  rollNumber: {
    type: String ,
    required: true,
    unique: true
  },
  standard : {
    type: String,
    required: true

  },
  photoURL: {
    type: String ,
   // required: true,
  },
  address :{
    line1 : {type: String},
    line2 : {type: String},
    city : {type: String},
    state : {type: String},
    country : {type: String}
  },
  parents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parents'
  }]
  
})

//collectionName, Schema
const studentsModel = mongoose.model('student', studentsSchema)

module.exports = studentsModel
