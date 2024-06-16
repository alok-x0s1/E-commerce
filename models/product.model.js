const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
        type: String
    },
    image : {
        type: String,
        unique: true
    },
    bgColor : {
        type: String
    },
    pannelColor : {
        type: String
    },
    textColor : {
        type: String
    },
    price : {
        type: Number
    },
    dicount : {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;