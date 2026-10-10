const mongoose = require("mongoose");

const eventModel = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            minlength: 9,
            maxlength: 40,
            unique: true, 
            required: true,
            trim: true
        },
        
        description: {
            type: String,
            minlength: 20,
            maxlength:200,
            required: true,
            trim: true
        },

        date: {
            type: Date,
            required: true,
        },

        location: {
            type: String,
            minlength: 10,
            maxlength: 15,
            required: true,
            trim: true
        },

        capacity: {
            type: Number,
            min: 1,
            required: true,
        }

    },

    {
        timestamps: true
    }
);

const modelEvent = mongoose.model("EVENT", eventModel);

module.exports = modelEvent;