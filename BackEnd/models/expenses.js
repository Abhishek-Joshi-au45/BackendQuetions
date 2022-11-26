const mongoose = require('mongoose')

const expensesSchema = new  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
    },
    ammount:{
        type: Number
    },
    tag:[{
        type:String
    }],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt:{
        type: Date
    }
})

const expensesModel = mongoose.model('expenses',expensesSchema)
module.exports = expensesModel