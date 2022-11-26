const express = require('express')
const { getParent,getParentByID,postParent, updateParentById,deleteParentByID } = require('../controllers/parents');
const { authMiddleware } = require('../middelwares/auth');
const authRouter = require('./auth');
const parentRouter = express.Router()

 


parentRouter.use(authMiddleware)

parentRouter.get('/', getParent);
parentRouter.post('/', postParent);
parentRouter.get('/:ID', getParentByID);
parentRouter.put('/:ID', updateParentById);
parentRouter.delete('/:ID', deleteParentByID);

module.exports = parentRouter
