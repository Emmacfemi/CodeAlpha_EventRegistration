const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        name:{
            type: String,
            minlength: 3,
            maxlength: 60,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true
    }
)

const modelUser = mongoose.model("USER", userModel);

module.exports = modelUser;