const express = require("express")
const app = express()

const router = require("./routes/sampleAirbnb")

require("dotenv").config()

const {initDB} = require("./dbconfig")
initDB()

app.use("/movies",router)

app.listen(8000,()=>{
    console.log("connected to port 8000")
})