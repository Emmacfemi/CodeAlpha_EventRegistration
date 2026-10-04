const express = require("express");

const eventRoutes = express.Router();

const {
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent,
} = require("../controller/eventController");


const {
    postEventSchema,
    updateEventSchema
} = require("../validations/eventValidation");


eventRoutes.get("/test", (req, res) => {
    res.status(200).json({
        message: `Event running successfully`,
    });
});

eventRoutes.get("/", getAllEvents);

eventRoutes.post("/", postEventSchema, createEvent);

eventRoutes.get("/:id", getEventById);

eventRoutes.put("/:id", updateEventSchema, updateEvent);

eventRoutes.delete("/:id", deleteEvent);


module.exports = eventRoutes;