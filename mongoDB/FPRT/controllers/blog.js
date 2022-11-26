const blogsModel = require('../models/blog')

const getBlogs = async(req, res)=>{

    try{
        const blogs = await blogsModel.find({ isPrivate: false })
        res.send(blogs)
    }catch(err){
        res.status(500).send({status: 'error', msg: 'Error in fetching'})
    }
}


const getBlogbyLoginUser = async(req, res)=>{
    const {ID} = req.params
    try{
        const blogs = await blogsModel.find({ isPrivate: true , createdBy : ID })
        if(blogs){
            res.send({status: 'Success', blogs})
        }else{
            res.status(500).send('User is not Authrized')
        }
    }catch(err){
        res.status(500).send({status: 'error', msg: 'Error in fetching'})
    }
}


const postBlog = async(req, res)=>{
    const BlogData = req.body
    try{
        const data = await blogsModel.create(BlogData)
        res.status(200).send(data)
    }catch(err){
        console.log(err)
        // res.redirect('/')
        res.status(500).send("Error in posting blog")
    }
}


const updateBlog = async(req, res)=>{
    const {ID}= req.params
    const newBlogdata = req.body

    try{
        const updateResult = await blogsModel.findByIdAndUpdate(ID, newBlogdata, {new: true, runValidators: true})
        console.log(updateResult)
        res.status(200).send('Updated Successfully')
    }catch(err){
        console.log(err)
        res.status(500).send('error in updating data')
    }
}


const deleteBlog = async(req, res)=>{
    const { ID } = req.params
    try{
        const RemoveBlog = await blogsModel.findByIdAndDelete(ID)
        console.log(RemoveBlog)
        res.status(200).send("Deleted successfully")
    }catch(err){
        console.log(err)
        res.send("Error in Deleting")
    }
}

module.exports ={
    getBlogs,
    getBlogbyLoginUser,
    postBlog,
    updateBlog,
    deleteBlog
}