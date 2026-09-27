const RegisterModel = require("../model/registrationModel");

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
    const register = await RegisterModel.findById(id);

    return register;
};

// Get all Registrations
const getAllRegister = async () => {
    const registers = await RegisterModel.find({});

    return registers;
};

// Update a Registration byID
const updateRegisterById = async (id, data) => {
    const register = await RegisterModel.findById(id);

    if (!register) {
        return null;
    }

    const updatedRegister = await RegisterModel.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );

    return updatedRegister;
};

// Delete a Registration by ID
const deleteRegisterById = async (id) => {
    const register = await RegisterModel.findById(id);

    if (!register) {
        return null;
    }

    const deletedRegister = await RegisterModel.findByIdAndDelete(id);

    return deletedRegister;
};

module.exports = {
    createRegister,
    getRegisterById,
    getAllRegister,
    updateRegisterById,
    deleteRegisterById
};