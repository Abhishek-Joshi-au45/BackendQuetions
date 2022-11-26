const mongoose = require('mongoose');
const dataschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String
    },
    image_url:{
        type:String
    },
    description:{
        type:String
    }

})
const datamodel = mongoose.model("campground_collection",dataschema)
module.exports = datamodel