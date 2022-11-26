const express = require('express')
const app = express()
const port = 8000
let count = 0;

app.get('/', (req, res) => {
   count++
   console.log(`we have  ${count} number of vistor`)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})