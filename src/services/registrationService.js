const RegisterModel = require("../models/registrationModel");

// Create a new registration
const createRegister = async (registerData) => {
    const newRegister = new RegisterModel({
        ...registerData
    });

    await newRegister.save();

    return newRegister;
};


// Get a registration by ID
const getRegisterById = async (id) => {
    const register = await RegisterModel.findById(id)
            .populate("user")
            .populate("event")

    return register;
};


// Get all Registrations
const getAllRegister = async () => {
    const registers = await RegisterModel.find({})
            .populate("user")
            .populate("event")

    return registers;
};


// Update a Registration byID
const updateRegisterById = async (registrationId, userId, registrationData) => {
    const register = await RegisterModel.findOne(
        {
            _id: registrationId,
            user: userId
        },
    );

    if (!register) {
        return null;
    }

    const updatedRegister = await RegisterModel.findOneAndUpdate(
        {
            _id: registrationId,
            user: userId
        },

        registrationData,

        {
            new: true,
            runValidators: true
        }
    );

    return updatedRegister;
};


// Delete a Registration by ID
const deleteRegisterById = async (registrationId, userId ) => {
    const register = await RegisterModel.findOne(
        {
            _id: registrationId,
            user: userId
        },
    );

    if (!register) {
        return null;
    }

    const deletedRegister = await RegisterModel.findOneAndDelete(
        {
            _id: registrationId,
            userId: userId
        }
    );

    return deletedRegister;
};

module.exports = {
    createRegister,
    getRegisterById,
    getAllRegister,
    updateRegisterById,
    deleteRegisterById
};