const express = require('express')
const { getUsers, getUserByID, postusers, updateUser,deleteUser} = require('../controllers/user');
const { authMiddleware } = require('../middlewares/auth')

const userRouter = express.Router()

// Get User
userRouter.get('/',getUsers);
userRouter.get('/:ID',getUserByID);

// 
userRouter.use(authMiddleware) 

// Post user
userRouter.post('/',postusers);

// Update user
userRouter.put('/:ID',updateUser);

// Delete user
userRouter.delete('/:ID',deleteUser)

module.exports = userRouter