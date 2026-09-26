const EventModel = require("../model/eventModel");

const createEvent = async (eventData) => {
    const newEvent = new EventModel({
        ...eventData
    });

    await newEvent.save();

    return newEvent;
}

const getEventById = async (id) => {
    const event = await EventModel.findById(id);

    return event;
}

const getAllEvents = async () => {
    const event = await EventModel.find({});

    return event;
}

const updateEventById = async (id, data) => {
    const event = await EventModel.findById(id);

    if(!event){
        return null;
    }

    const updatedEvent = await Eventmodel.findByIdAndUpdate(
        id, 
        data,
        {
            new: true
        }
    )

    return updatedEvent;
}

const deleteEventById = async (id) => {
    const event = await EventModel.findById(id);

    if(!event){
        return null;
    }

    const deletedEvent = await EventModel.findByIdAndDelete(id);

    return deletedEvent;
};

module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    updateEventById,
    deleteEventById
}