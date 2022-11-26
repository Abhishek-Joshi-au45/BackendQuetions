const express = require('express')
const app = express()

const { getUsers, getUsersByID, postUser, updateUserById, deleteUserByID } = require('./controllers/function')

app.use(express.json())


app.get('/users', getUsers)

app.get("/users/:userID",getUsersByID)

app.post("/users",postUser)

app.put("/users/:userID",updateUserById)

app.delete('/users/:userID',deleteUserByID)

app.listen(8000,()=>{
    console.log("Server started at 8000")
})