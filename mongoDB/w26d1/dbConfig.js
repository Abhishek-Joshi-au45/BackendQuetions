const mongoose = require('mongoose')

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'w26d1CustumerCarsDB' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error connecting to DB")
  }
}

module.exports = {
  initDB
}