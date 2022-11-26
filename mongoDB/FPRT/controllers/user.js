const usersModel = require('../models/user')

const getUsers = async(req, res)=>{
    try{
        const users = await usersModel.find();
        res.send({status: 'success', users})
    }catch(err){
        res.status(500).send({status: 'error', msg: 'Error in Fetching'})
    }
}


const getUserByID = async(req, res)=>{
    const { ID } = req.params
try
   { 
    const user = await usersModel.findById(ID)
    if(user){
        res.send(user)
    }else{
        res.status(404).send({status: 'error', msg: 'Not Found'})
    }
}catch(err){
    res.status(404).send({status: 'error', msg: 'Not Found'})

}
}


const postusers = async(req, res)=>{
    const userData = req.body
    try{
        const User = await usersModel.create(userData)
        res.status(200).send(User)
    }catch(err){
        console.log(err)
        res.status(500).send('Error in Posting User')
    }
}


const updateUser = async(req, res)=>{
    const {ID}= req.params
    const newUserData = req.body

    try{
        const updateResult = await usersModel.findByIdAndUpdate(ID, newUserData, {new: true, runValidators: true})
        console.log(updateResult)
        res.status(200).send('Updated Successfully')
    }catch(err){
        console.log(err)
        res.status(500).send('error in updating data')
    }
}


const deleteUser = async(req, res)=>{
    const { ID } = req.params
    try{
        const deleteData = await usersModel.findByIdAndDelete(ID)
        console.log(deleteData)
        res.status(200).send("Deleted successfully")
    }catch(err){
        console.log(err)
        res.send("Error in Deleting")
    }
}

module.exports ={
    getUsers,
    getUserByID,
    postusers,
    updateUser,
    deleteUser
}