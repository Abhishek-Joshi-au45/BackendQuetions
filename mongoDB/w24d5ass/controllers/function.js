const ProductModel = require('../models/product')
const UsersModel = require('../models/user')

const path =require('path')

const getProductpage = (req,res)=>{
  let pat = path.join(__dirname,'../')
  res.sendFile(`${pat}/public/product.html`)
}

const getUserpage = (req,res)=>{
  let pat = path.join(__dirname,'../')
  res.sendFile(`${pat}/public/user.html`)
}


const postUser = async (req, res) => {
  const UserData = req.body
  try {
    const result = await UsersModel.create(UserData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

const postProduct = async (req, res) => {
  const UserData = req.body
  try {
    const result = await ProductModel.create(UserData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

const sendData = async(req,res)=>{
  try {
    const productData = await ProductModel.find();
    const userData = await UsersModel.find();
    res.send({ Product : productData , User : userData})
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}

module.exports = {
  getProductpage,
  getUserpage,
  postUser,
  postProduct,
  sendData
}