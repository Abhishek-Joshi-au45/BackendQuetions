              
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
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
     description:{
        type:String,
        // required:true
    },  
    password: {
        type:String,
        required:true
    },
    user_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'custumers'
    } ]
},                
);  

//collectionName, Schema
const userModel = mongoose.model('users', userSchema)

module.exports = userModel
