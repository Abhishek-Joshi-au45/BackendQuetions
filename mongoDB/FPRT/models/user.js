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
    image: {
        type: String,
        required: true
    }
})

const usersModel = mongoose.model('users',usersSchema)

module.exports = usersModel