const mongoose = require('mongoose')

async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{dbName: 'FPRTdb'})
        console.log('Connected to DB successfully')
    }
    catch(err){
        console.log("Error in connecting to DB")
    }
}

module.exports = {
    initDB
}