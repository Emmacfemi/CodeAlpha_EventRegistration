const mongoose = require("mongoose");

const registerModel = new mongoose.Schema(
    {
        user: {
            type: String,            
            default: " ",
            requiured: true,
            unique: true
        },

        event: {
            type: String,
            minlength: 1,
            required: true
        },

        registerAt: {
            type: Number,
            required: true,
            unique: true
        },

        status: {
            type: Boolean,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const modelRegister = mongoose.model("REGISTER", registerModel);

module.exports = modelRegister