const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        name:{
            type: String,
            minlength: 7,
            maxlength: 10,
            unique: true,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            unique: true,
            minlength: 15,
            maxlength: 18,
            required: true,
        }
    },

    {
        timestamps: true
    }
)

const modelUser = mongoose.model("USER", userModel);

module.exports = modelUser;