const mongoose = require('mongoose');
async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL, {dbname: "campgroundDb" })
        console.log("Connected To DB")
    }
    catch(err){
        console.log("Error in connecting to db")
    }
}
module.exports = {initDB}