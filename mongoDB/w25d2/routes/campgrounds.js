const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
// const base64 = require("js-base64")
// const cloudinary = require('cloudinary').v2
// cloudinary.config({
//     cloud_name:"dd6grmzgp",
//     api_key:"521593214855641",
//     api_secret:"-LNtckUdn4D1KDHQOOjv-saLTOU",
//     secure:true
// })
const {getcamp,getcampform,postcampdata} = require("../controllers/campground.js")
// const data = []
router.get("/",getcamp)
router.get("/new",getcampform)
router.post("/new",upload.single("image_url"),postcampdata)
module.exports = router