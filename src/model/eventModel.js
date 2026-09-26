const mongoose = require("mongoose");

const eventModel = new mongoose.Schema(
    {
        title: {
            type: String,
            minlength: 9,
            maxlength: 12,
            unique: true
        },
        
        description: {
            type: String,
            minlength: 20,
            maxlength: 30,
            required: true,
        },

        date: {
            type: Number,
            required: true,
            unique: true
        },

        location: {
            type: String,
            minlength: 10,
            maxlength: 15,
            required: true
        },

        capacity: {
            type: String,
            minlength: 1,
            maxlength: 7,
            required: true,
        }

    },

    {
        timestamps: true
    }
);

const modelEvent = mongoose.model("EVENT", eventModel);

module.exports = modelEvent;