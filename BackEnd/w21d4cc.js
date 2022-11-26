const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('./w21d4data.js') //object
const app = express()

//add middlewares
app.use(express.json()) //accept json form of data

//GET Operations
app.get('/userInfo', (req, res) => {
const queryParams = req.query
const { age, name ,id } = queryParams

let filteredPosts = mockData.userInfo
if (age) {
  filteredPosts = filteredPosts.filter((post) => {
    return post.age === Number(age) ? true : false
   })
}
if (name) {
    filteredPosts = filteredPosts.filter((post) => {
    return post.name === name ? true : false
    })
}
if(id){
    filteredPosts = filteredPosts.filter((post) => {
        return post.id === Number(id) ? true : false
})
}
 res.json(filteredPosts) //from DB
})
  
app.get('/userInfo/:id', (req, res) => {
    const paramObj = req.params
    const { id } = paramObj //{postID: '1'} - destructuring
    const post = mockData.userInfo.find((post) => {
    return post.id === Number(id) ? true : false
})
if (post) {
    res.json(post)
} else {
    res.status(404).json({ status: 'No Data Found' }) //send response along with different status code
}
})


//add posts

app.post('/userInfo', (req, res) => {
const postData = req.body
mockData.userInfo.push(postData)
res.status(201).send(postData)
})


app.listen(8000, () => {
    console.log("Server Started Successfully at Port 8000")
})
