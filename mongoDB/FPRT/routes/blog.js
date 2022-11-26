const express = require('express')
const path = require('path')
const {getBlogs,getBlogbyLoginUser,postBlog, updateBlog, deleteBlog} = require('../controllers/blog')

const { authMiddleware } = require('../middlewares/auth')

const blogsRouter = express.Router()

// get public blogs 
blogsRouter.get('/', getBlogs);

blogsRouter.get('/addblog',(req,res)=>{
    let pat = path.join(__dirname,'../')
    res.sendFile(`${pat}public/addBlog.html`)
})

// Posting a blog
blogsRouter.post('/', postBlog);

blogsRouter.use(authMiddleware)

//get  private blogs 
blogsRouter.get('/:ID', getBlogbyLoginUser);

// Updating blog by creater
blogsRouter.put('/:ID', updateBlog);

// deleting blog by creater
blogsRouter.delete('/:ID', deleteBlog);

module.exports = blogsRouter
