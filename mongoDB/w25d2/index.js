const express = require("express")
require('dotenv').config()

const app = express()
const {initDB} = require("./dbconfig.js")

const router = require("./routes/campgrounds.js")

initDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/campgrounds",router)
app.listen(8000,()=>{
    console.log("Server started at 8000")
})