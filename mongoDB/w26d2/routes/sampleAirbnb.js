const express = require("express")
const router = express.Router()

const getmovie  = require("../controllers/sampleAirbnb")

router.get("/",getmovie)

module.exports = router