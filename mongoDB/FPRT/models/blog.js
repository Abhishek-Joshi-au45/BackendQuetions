const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
       //  unique: true
    },
    content: {
        type: Array ,
        items :{
            type: String
        },
       // required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isPrivate: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    createdAt: {
        type: mongoose.Schema.Types.Date,
        required: true,
        // default: new Date()
    }
})

const blogsModel = mongoose.model('blogs',blogsSchema)

module.exports = blogsModel
