const joi = require("joi");

const postUserValidation = joi.object({
    name: joi.string().min(7).max(10).required(),
    email: joi.string().email().required(),
    password: joi.string().min(15).max(18).required()
});

const postUserSchema = (req, res, next) => {
    const {error, value} = postUserValidation.validate(req.body, {
        abortEarly: false,
    });

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();
}

const updateUserValidation = joi.object({
    name: joi.string().min(7).max(10),
    email: joi.string().email(),
    password: joi.string().min(15).max(18),
    
});

const updateUserSchema = (req, res, next) => {
    const { error, value } = updateUserValidation.validate(req.body, 
        { abortEarly: false }
    );

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    req.body = value;

    next();
}

const loginUserValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()

});

const loginUserSchema = (req, res, next) => {
    const { error, value } = loginUserValidation.validate(req.body,
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
    postUserSchema,
    updateUserSchema,
    loginUserSchema
}