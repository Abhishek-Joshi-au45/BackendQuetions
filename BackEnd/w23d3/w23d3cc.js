const express = require('express')
const app = express()

let  books = require('./data.js')

app.use(express.json())

// const nanoid = require('nanoid')
// book.id = nanoid() // "V1StGXR8_Z5jdHi6B-myT"

app.get('/books',(req,res)=>{
res.send(books)

})

app.get('/books/:id',(req,res)=>{
    const querParam = req.params
    const {id} = querParam
    
    // const movieID = req.params.movieID
    
    const book = books.find((book) => {
    return book.id == id
  })

  if (book) {
    res.send(book)
  } else {
    res.status(404).json({ msg: 'No Movie Found' })
  }
    
 })

app.post('/books',(req,res)=>{
    const newpost = req.body
    books.push(newpost)
    res.send({"status" : "data added"})
})

app.put('/books/:id',(req,res)=>{
    const querParam = req.params
    const {id} = querParam
    const newData = req.body

    const { name, year, author } = newData

    books = books.map((book)=>{
        if(book.id===id){
            if(name){
                book.name = name
            }
            if(year){
                book.year = year
            }
            if(author){
                book.author = author
            }
        }
        return book
    })
    res.send({'Status' : 'Update Successfully'})
})

app.delete('/books/:id',(req,res)=>{
    const { id } =req.params 
    //let deleteMovie = movies

    books = books.filter((book)=>{
        return book.id != id
    })
    res.send({'status' : 'Delete successfull'})
})




app.listen(8000 , ()=>{
    console.log('Server started Successfull at 8000')
})