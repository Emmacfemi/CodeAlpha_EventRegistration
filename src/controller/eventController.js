const EventService = require("../services/eventService");

// Create Event
const createEvent = async (req, res, next) => {
    try{
        const { title, description, date, location, capacity } = req.body;

        const newEvent = await EventService.createEvent({
            userId: req.user.Id,
            title,
            description,
            date,
            location,
            capacity
        });

        
        return res.status(201).json({
            message: `Event created successfully`,
            event: newEvent
        });

    }catch(error){
        next(error);
    }
}


const getEventById = async (req, res, next) => {
    try{
        const event = await EventService.getOneEvent(
            req.params.id,
            req.user.Id
        );

        if(!event){
            return res.status(404).json({
                message: `Event not found`
            });
        }

        return res.status(200).json({
            message: `Event fetched successfully`,
            event
        });

    }catch(error){
        next(error)
    }
}

const getAllEvents = async (req, res, next) => {
    try{
        const events = await EventService.getAllEvents(
            req.user.Id
        );

        return res.status(200).json({
            message: `All Events fetched successfully`,
            events
        });

    }catch(error){
        next(error);
    }
}

const updateEvent = async (req, res, next) => {
    try{
        const event = await EventService.updateEventById(
            req.params.id,
            req.user.Id,
            req.body
        );

        if(!event){
            return res.status(404).json({
                message: `Event not found`
            });
        }

        return res.status(200).json({
            message: `Event updated successufully`,
            event
        });

    }catch(error){
        next(error);
    }
}

const deleteEvent = async (req, res, next) => {
    try{
        const event = await EventService.deleteEventById(
            req.params.id,
            req.user.Id
        );

        if(!event){
            return res.status(404).json({
                message: `Event not found`
            });
        }

        return res.status(200).json({
            message: `Event deleted successfully`,
            event: event
        });

    }catch(error){
        next(error);
    }
}

module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent,
}