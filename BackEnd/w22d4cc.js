const express = require('express') //commonJS Modules //import express from 'express' -Es6
// const multer = require('multer') //import lib

const axios = require('axios').default;
//fs module

const app = express()

// const upload = multer({ dest: 'files/' }) //configure dest
app.use(express.json())

// app.use(express.urlencoded({ extended: true }))

// app.use(express.static('public')) //{index:false}

// async function getComment() {
//  try {
//     const responseOfComment = await axios.get('https://jsonplaceholder.typicode.com/comments')
//     console.log(responseOfComment);
//     } catch (error) {
//     console.error(error);
//     }
// }
// // getComment()

// async function getPosts() {
//   try {
//      const responseOfPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       console.log(responseOfPosts);
//      } catch (error) {
//      console.error(error);
//      }
//  }
//  getPosts()

// app.get('/postWithComment', (req, res) => {
// const data = req.params
// res.send(data)
// // getUser()
// })

// app.get('/post', (req, res) => {
// const data=req.params
//  res.send(data)
// })

// app.get('/Comment', (req, res) => {
// const data=req.params
// res.send(data)
// })

const post="https://jsonplaceholder.typicode.com/posts"

const comments="https://jsonplaceholder.typicode.com/comments"

const getUser=async (url)=>{
    return await axios.get(url).then((res)=> res).catch((error)=> (
        console.log("there is error" , error  ) ))
        
}


app.get("/postWithComment", async(req,res)=>{

    const apiPost=await getUser(post)
    const apiComment=await getUser(comments)
  for(let i=0; i<apiPost.data.length; i++){
    for(let j=0; j<apiComment.data.length; j++){
    if(apiPost.data[i].id===apiComment.data[j].id){

    apiPost.data[i].com=apiComment.data[j];
    }
  }
  res.send(apiPost.data)
  } 
})


app.get("/posts", async(req,res)=>{
  const apiPost=await getUser(post)
  res.send(apiPost.data)
})


app.get("/posts/:id", async(req,res)=>{
  const apiPost=await getUser(post)
   res.sendFile(`${__dirname}/w22d4cc.html`)
})

app.get("/comments", async(req,res)=>{
  const apiComment=await getUser(post)
  res.send(apiComment.data)
  
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})
 
