const RegisterModel = require("../model/registrationModel");

const createRegister = async (registerData) => {
    const newRegister = new RegisterModel({
        ...registerData
    });

    await newRegister.save();

    return newRegister;
};

const getRegisterById = async (id) => {
    const register = await RegisterModel.findById(id);

    return register;
};

const getAllRegister = async () => {
    const registers = await RegisterModel.find({});

    return registers;
};

const updateRegisterById = async (id, data) => {
    const register = await RegisterModel.findById(id);

    if (!register) {
        return null;
    }

    const updatedRegister = await RegisterModel.findByIdAndUpdate(
        id,
        data,
        {
            new: true
        }
    );

    return updatedRegister;
};

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