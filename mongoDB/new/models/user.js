const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    time:{
        type:String,
    }
})

const usersModel = mongoose.model('users',usersSchema)

module.exports = usersModel