const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required: true,
            maxLength: 20,
        },
        lastName:{
            type: String,
            required: true,
            maxLength: 20,
        },
        email:{
            type: String,
            required: true,
            maxLength: 50,
        },
        password:{
            type: String,
            required: true,
            maxLength: 200,
        }
    }
);

module.exports = mongoose.model("User", userSchema); 