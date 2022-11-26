const express = require('express')

const multer = require('multer')

let array = [];

const app = express()

app.use(express.json())

app.use(express.static('w23d4'))

app.use(express.urlencoded({ extended: true }))

var cloudinary = require('cloudinary').v2;

const base64 = require('js-base64')

const upload = multer({ storage : multer.memoryStorage() })

cloudinary.config({
    cloud_name: 'abhishekjoshi2030',
    api_key: '756576172359427',
    api_secret: 'LK1EJ6Dm0mQZeju50FEx9F_v6Jc',
    secure: true
    
  })

app.get('/upload',(req,res)=>{
    // const file =req.file
    res.sendFile(`${__dirname}/index.html`)
})

// app.get('/',(req,res)=>{
//    res.sendFile(`${__dirname}/w23d4upload.html`)
// })

app.get('/',(req,res)=>{
    res.send(array)
 })


app.post("/upload",upload.single('file'), (req,res)=>{
let movieData=req.body
let  fileData=req.file
// console.log(movieData);
// console.log(fileData);
 if (fileData) {
     //convert buffer to base64
const base64FileData = base64.encode(fileData.buffer)
     cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64FileData}`, function (error, response) {
       if (error) {
         res.status(500).send({ status: 'Error Occured in uploading file' })
       }
// console.log(response);
movieData.imageUrl = response.secure_url //{id, name, language, imageUrl}
 array.push(movieData)
 // console.log(movies);
    res.send(`Image is Added to cloudinary Got to "http://localhost:8000/" path to view it` )
})
}
})



app.listen(8000,()=>{
    console.log("Server started at port 8000")
})


