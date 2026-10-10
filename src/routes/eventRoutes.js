const express = require("express");

const eventRoutes = express.Router();

const authMiddleware = require("../middleware/authMiddleware")

const {
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventController");


const {
    postEventSchema,
    updateEventSchema
} = require("../validations/eventValidation");


eventRoutes.get("/test", (req, res) => {
    res.status(200).json({
        message: `Event running successfully`,
    });
});

eventRoutes.get("/", authMiddleware, getAllEvents);

eventRoutes.post("/", authMiddleware, postEventSchema, createEvent);

eventRoutes.get("/:id", authMiddleware, getEventById);

eventRoutes.put("/:id", authMiddleware, updateEventSchema, updateEvent);

eventRoutes.delete("/:id", authMiddleware, deleteEvent);


module.exports = eventRoutes;