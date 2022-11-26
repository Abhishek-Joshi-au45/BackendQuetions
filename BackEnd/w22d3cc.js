const express = require('express') //commonJS Modules //import express from 'express' -Es6
const multer = require('multer') //import lib

//fs module

const app = express()

// const upload = multer({ dest: 'files/imgfile/' }) //configure dest

const products = []
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//express-fileupload
//multer
//multiparty
app.use(express.static('files')) //{index:false}

const storage = multer.diskStorage({
  destination: function (req, file, callBackfunc) {
    callBackfunc(null, 'files/imgfile')
  },
  filename: function (req, file, callBackfunc) {
    const uniqueSuffix = Date.now()
    callBackfunc(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('file'), (req, res) => { //add middleware

  const fileData = req.file
//   console.log("FileData", fileData)

  const productData = req.body
  products.push(productData)
  console.log(productData, "Hello")
  // var name = productData.name
  // var email = productData.email
  // var pass=productData.password
  console.log(productData.name)
  console.log(productData.email)

  res.sendFile(`${__dirname}/files/profile.html`)
// res.send(`Name: ${productData.name}        Email: ${productData.email}`);
// res.sendFile(`{__dirname}/files/profile.html `)
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})



// app.get('/signUp', (request, response) => {
//     console.log("Get Call executed")
//     // console.log(__dirname, "directoryName")
//     // console.log(__filename, "filename")
//     response.sendFile(`${__dirname}/files/index.html`)
// }) 

// app.get('/profile', (request, response) => {
//     console.log("Get Call executed")
//     // console.log(__dirname, "directoryName")
//     // console.log(__filename, "filename")
//     response.sendFile(`${__dirname}/files/profile.html`)
// }) 
