const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    unique: true,
    required: true,
    maxLength: 50
  },
  ProductPrice: {
    type: Number,
    required:true
  }
})

//collectionName, Schema
const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel
