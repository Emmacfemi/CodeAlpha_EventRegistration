const joi = require("joi");

// Create Register validation 
const registerSchema = joi.object({
    user: joi.string().min(9).max(10).required(),
    event: joi.string().min(1).required(),
    registerAt: joi.string().min(1).required(),
    status: joi.boolean().allow("").required()
});

const registerSchemaValidation = (req, res, next) => {
    const { error, value } = registerSchema.validate(req.body,
        {
            abortEarly: false
        }
    );

    if(error){
        return res.status(404).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();
}

// Update Register validation
const updateValidation = joi.object({
    user: joi.string().min(9).max(10),
    event: joi.string().min(1),
    registerAt: joi.string().min(1).required(),
    status: joi.boolean().allow("").required()
});

const updateSchemaValidation = (req, res, next) => {
    const { error, value } = updateValidation.validate(req.body, 
        {
            abortEarly: false
        }
    );

    if(error){
        return res.status(404).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();
}

module.exports = {
    registerSchemaValidation,
    updateSchemaValidation
}