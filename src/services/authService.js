const UserModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

const createUser =async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new UserModel({
        ...userData,
        password: hashedPassword
    });

    await newUser.save();

    return newUser;

};

const getUserByEmail = async (email) => {
    const userEmail = await UserModel.findOne({
        email: email
    });

    return userEmail;
};

const getUserById = async (id) => {
    const user = await UserModel.findById(id);

    return user;
};

const getAllUsers = async () => {
    const user = await UserModel.find({});

    return user;
}

const updateUserById = async (id, data) => {
    const user = await UserModel.findById(id);

    if(!user){
        return null;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
        id, 
        data,
        {
            new: true,
            runValidator: true
        }
    )

    return updatedUser;
}

const deleteUserById = async (id) => {
    const user = await UserModel.findById(id);

    if(!user){
        return null;
    }

    const deletedUser = await UserModel.findByIdAndDelete(
        id
    )

    return deletedUser;
}

module.exports = {
    createUser, 
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById
}