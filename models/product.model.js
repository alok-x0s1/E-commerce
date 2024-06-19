const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
        type: String
    },
    image : {
        type: Buffer
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
    discount : {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;