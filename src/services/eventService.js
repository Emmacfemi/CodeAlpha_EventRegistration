const EventModel = require("../models/eventModel");

// CREATE NEW EVENT
const createEvent = async (eventData) => {
    const newEvent = new EventModel({
        ...eventData
    });

    await newEvent.save();

    return newEvent;
}

// GET EVENT BY ID
const getEventById = async (id) => {
    const event = await EventModel.findById(id);

    return event;
}


// GET ONE EVENT
const getOneEvent = async (userId, eventId) => {
    const event = await EventModel.findOne(
        {
            _id: eventId,
            userId
        },
    )

    return event;
}


// GET ALL EVENTS
const getAllEvents = async (userId, page = 1, limit = 10) => {
    const skip = ( page - 1 ) * limit

    const events = await EventModel.find({
        userId
    })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)

    return events;
}


// UPDATE EVENT
const updateEventById = async (userId, eventId, eventData) => {
    const event = await EventModel.findOne(
        {
            _id: eventId,
            userId
        },
    );

    if(!event){
        return null;
    }

    const updatedEvent = await EventModel.findOneAndUpdate(
        {
            _id: eventId,
            userId
        },

        eventData,

        {
            new: true,
            runValidators: true
        }
    )

    return updatedEvent;
}


// DELETE EVENT
const deleteEventById = async (userId, eventId) => {
    const event = await EventModel.findOne(
        {
            _id: eventId,
            userId
        },
    );

    if(!event){
        return null;
    }

    const deletedEvent = await EventModel.findOneAndDelete(
        {
            _id: eventId,
            userId
        },
    );

    return deletedEvent;
};

module.exports = {
    createEvent,
    getEventById,
    getOneEvent,
    getAllEvents,
    updateEventById,
    deleteEventById
}