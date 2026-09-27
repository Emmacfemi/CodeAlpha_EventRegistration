const mongoose = require("mongoose");

const registerModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,            
            ref: "USER",
            required: true,
        },

        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "EVENT",
            required: true
        },

        registerAt: {
            type: Date,
            default: Date.now
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

// Prevent duplicate registrations for the same user and event combination
registerModel.index(
    {
        user: 1, 
        event: 1
    },

    {
        unique: true
    }
);


const modelRegister = mongoose.model("REGISTER", registerModel);

module.exports = modelRegister