const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullname : {
        type: String,
        minLength: 3,
        trim: true
    },
    email : {
        type: String,
        unique: true
    },
    username : {
        type: String,
        trim: true,
        unique: true
    },
    password : {
        type: String
    },
    contact : {
        type: Number
    },
    picture : {
        type: String
    },
    cart : [{
        type: String
    }],
    orders : [{
        type: String
    }],
})

const User = mongoose.model("User", UserSchema)

module.exports = User;