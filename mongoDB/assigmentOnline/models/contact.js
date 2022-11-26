const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    }
},              
);  

//collectionName, Schema
const contactModel = mongoose.model('contact', contactSchema)

module.exports = contactModel