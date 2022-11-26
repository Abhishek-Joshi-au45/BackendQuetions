const mongoose = require("mongoose")
async function initDB(){
    try{
    await mongoose.connect(process.env.MONGO_URL,{dbName:"sample_mflix"})
    console.log("connected to db successfully")
    }
    catch(err){
        console.log("error connecting to db")
    }
}
module.exports = {initDB}