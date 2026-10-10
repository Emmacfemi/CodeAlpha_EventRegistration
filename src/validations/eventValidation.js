const joi = require("joi");

const postEventValidation = joi.object({
    title: joi.string().min(9).max(40).required(),
    description: joi.string().min(20).max(200).required(),
    date: joi.date().required(),
    location: joi.string().min(10).max(32).required(),
    capacity: joi.number().integer().min(1).required()
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
    title: joi.string().min(9).max(40),
    description: joi.string().min(20).max(200),
    date: joi.date(),
    location: joi.string().min(7).max(32),
    capacity: joi.number().integer().min(1)
}).min(1)

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

