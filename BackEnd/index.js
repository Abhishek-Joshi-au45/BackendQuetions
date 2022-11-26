const express = require('express')
const app = express()

// const cors = require('cors')

require('dotenv').config()
const { initDB } = require('./dbConfig')

const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

initDB()

app.use(cookieParser())

const PORT = process.env.PORT || 8000

// app.use(cors({
//     origin: '*'
//   }))

const path = require('path')
let pat = path.join(__dirname,'../frontrnd/build')
app.use(express.static('pat'))

const authRouter = require('./routes/auth')
const expensesRouter = require('./routes/expenses')


// console.log(pat)

// app.get('/',(req,res)=>{
//   res.send('home page')
// })

app.use('/',authRouter)

app.use('/expenses',expensesRouter)
  
app.get('*', (req, res) => {
    res.sendFile(`${pat}/index.html`)
  })

app.listen(8000,()=>{
    console.log('Server started')
})

