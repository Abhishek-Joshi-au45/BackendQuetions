const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('./w22d1ccdata') //object

const app = express()

app.use(express.json()) //accept json form of data

app.use(express.urlencoded({ extended: true }))

//GET Operations

app.get('/users', (req, res) => {
    const queryParams = req.query
     
    let filteredPosts = mockData.users

    if (filteredPosts) 
    {
    res.json(filteredPosts)
    } else {
    res.status(404).json({ status: 'No Data Found' }) //send response along with different status code
    }
})

app.get('/users/:id', (req, res) => { //route ;level
    //return posts with ID - postID
    const paramObj = req.params
    const { id } = paramObj //{postID: '1'} - destructuring
    const post = mockData.users.find((post) => {
      return post.id === Number(id) ? true : false
    })
  
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ status: 'No Data Found' }) //send response along with different status code
    }
  })

//add posts
app.post('/users', (req, res) => {
    const postData = req.body
  
    console.log(postData, "New Posts")
    mockData.users.push(postData)
    res.status(201).send(postData)
})

// add delete
app.delete('/users/:id', (req, res) => {
    const pathParams = req.params
    const { id } = pathParams
  
    mockData.users = mockData.users.filter(post => {
      return post.id === Number(id) ? false : true
    })
  
    res.status(200).json({ status: 'Deleted Successfully' })
  })
  
  app.put('/users/:id', (req, res) => {
    const pathParams = req.params
    const { id } = pathParams
  
    const newPostData = req.body
    const { name, username, email,address,phone,website,company} = newPostData
  
    mockData.users = mockData.users.map(post => {
      if (post.id === Number(id)) {
  
        if (name) {
          post.name = name
        }
        if (username) {
          post.username = username
        }
        if (email) {
            post.email = email
        }

        if (address) {
            post.address = address
        }
        if(address.street){
            post.address.street = address.street
        }
        if(address.suite){
            post.address.suite=address.suite
        }
        if(address.city){
            post.address.city=address.city
        }
        if(address.zipcode){
            post.address.zipcode=address.zipcode
        }
        if(address.geo.lat){
            post.address.geo.lat=address.geo.lat
        }
        if(address.geo.lng){
            post.address.geo.lng=address.geo.lng
        }

        if (phone) {
            post.phone = phone
        }
        if (website) {
            post.website = website
        }

        if (company) {
            post.company = company
        }
        if (company.name) {
            post.company.name =company.name
        }
        if (company.catchPhrase) {
            post.company.catchPhrase = company.catchPhrase
        }
        if (company.bs) {
            post.company.bs = company.bs
        }
        
      }
      return post
    })
    res.status(200).send(newPostData)
  })

  app.listen(8000, () => {
    console.log("Server Started Successfully at Port 8000")
  })
  
