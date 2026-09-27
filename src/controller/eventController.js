const EventService = require("../services/eventService");

const createEvent = async (req, res, next) => {
    try{
        const newEvent = new EventService.createEvent({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            location: req.body.location,
            capacity: req.body.capacity
        });

        await newEvent.save();

        return res.status(201).json({
            message: `Event created successfully`
        });
    }catch(error){
        next(error);
    }
}

const getEventById = async (req, res, next) => {
    try{
        const event = await EventService.getEventById(req.params.id);

        if(!event){
            return res.status(404).json({
                message: `Event not found`
            });
        }

        return res.status(200).json({
            message: `Event fetched successfully`,
            event: event
        });

    }catch(error){
        next(error)
    }
}

const getAllEvents = async (req, res, next) => {
    try{
        const event = await EventService.getAllEvents();

        return res.status(200).json({
            message: `All Events fetched successfully`,
            event: event
        });

    }catch(error){
        next(error);
    }
}

const updateEvent = async (req, res, next) => {
    try{
        const event = await EventService.updateEventById(
            req.params.id,
            req.body
        );

        if(!event){
            return res.status(404).json({
                message: `Event not found`
            });
        }

        return res.status(200).json({
            message: `Event updated successufully`,
            event: event
        });

    }catch(error){
        next(error);
    }
}

const deleteEvent = async (req, res, next) => {
    try{
        const event = await EventService.deleteEventById(
            req.params.id
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