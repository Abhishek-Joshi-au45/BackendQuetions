const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static('public'))

app.get('/', (request, response) => {
    console.log("Get Call executed")
   // console.log(__dirname, "directoryName")
   // console.log(__filename, "filename")
   response.sendFile(`${__dirname}/public/index.html`)
    })
    
app.get('/about', (request, response) => {
    console.log("Get Call executed")
    // console.log(__dirname, "directoryName")
    // console.log(__filename, "filename")
    response.sendFile(`${__dirname}/public/about.html`)
      })
    
app.get('/contact', (request, response) => {
    console.log("Get Call executed")
    // console.log(__dirname, "directoryName")
    // console.log(__filename, "filename")
    response.sendFile(`${__dirname}/public/contact.html`)
})  

app.listen(8000, () => {
    console.log("Server Started Successfully at Port 8000")
})