const mongoose = require("mongoose")

const OwnerSchema = new mongoose.Schema({
    fullname : {
        type: String,
        minLength: 3,
        trim: true
    },
    email : {
        type: String,
        unique: true
    },
    password : {
        type: String
    },
    picture : {
        type: String
    },
    gstNum : {
        type: String
    },
    products : [{
        type: String
    }],
})

const Owner = mongoose.model("Owner", OwnerSchema)

module.exports = Owner;