const joi = require("joi");

const postEventValidation = joi.object({
    title: joi.string().min(9).max(12).required(),
    decription: joi.string().min(20).max(30).required(),
    date: joi.number().required(),
    location: joi.string().min(7).max(12).required(),
    capacity: joi.string().min(1).max(7).required()
});

const postEventSchema = (req, res, next) => {
    const{ error, value } = postEventValidation.validate(req.body, 
        {
            abortyEarly: false
        }
    );

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();

}


const updateEventValidation = joi.object({
    title: joi.string().min(9).max(12),
    decription: joi.string().min(20).max(30),
    date: joi.number(),
    location: joi.string().min(7).max(12),
    capacity: joi.string().min(1).max(7),
});

const updateEventSchema = (req, res, next) => {
    const { error, value } = updateEventValidation.validate(req.body, 
        {
            abortEarly: false
        }
    );

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();
};

module.exports = {
    postEventSchema,
    updateEventSchema
}

