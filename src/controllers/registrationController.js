const RegisterService = require("../services/registrationService");

// create register 
const createRegister = async (req, res, next) => {
    try{
        const { user, event, registerAt, status } = req.body;

        const newRegister = await RegisterService.createRegister({
            user,
            event,
            registerAt,
            status
        });

        
        return res.status(201).json({
            message: `Registration created successfully`,
            register: newRegister
        });

    }catch(error){
        next(error);
    }
}

// Get all Register
const getAllRegister = async (req, res, next) => {
    try{
        const registers = await RegisterService.getAllRegister();

        return res.status(200).json({
            message: `All registrationsfetched successfully`,
            register: registers
        });

    }catch(error){
        next(error);
    }
}

// Get register by ID
const getRegisterById = async (req, res, next) => {
    try{
        const register = await RegisterService.getRegisterById(req.params.id);

        if(!register){
            return res.status(404).json({
                message: `Registration not found`
            });
        }

        return res.status(200).json({
            message: `Registration fetched successfully`,
            register: register
        });

    }catch(error){
        next(error);
    }
}

// Update register
const updateRegister = async (req, res, next) => {
    try{
        const register = await RegisterService.updateRegisterById(
            req.params.id,
            req.body
        );

        if(!register){
            return res.status(404).json({
                message: `Registration not found`
            });
        }

        return res.status(200).json({
            message: `Registration updated successfully`,
            register: register
        });
        
    }catch(error){
        next(error);
    }
}

// Delete register
const deleteRegister = async (req, res, next) => {
    try{
        const register = await RegisterService.deleteRegisterById(req.params.id);

        if(!register){
            return res.status(404).json({
                message: `Registration not found`
            });
        }

        return res.status(200).json({
            message: `Registration deleted successfully`,
            register: register
        });

    }catch(error){
        next(error);
    }
}

module.exports = {
    createRegister,
    getAllRegister,
    getRegisterById,
    updateRegister,
    deleteRegister
}