const UserModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

const createUser =async (userData) => {
    const newEmail = userData.email.toLowerCase().trim();
    const newUsername = userData.name.toLowerCase().trim();

    // check existing email 
    const existingEmail = await UserModel.findOne({
        email: newEmail
    });
    if(existingEmail){
       throw new Error(`Email already in use`);
    }

    // check existing username
    const existingUsername = await UserModel.findOne({
        name: newUsername
    });

    if(existingUsername){
        throw new Error(`Username already taken`);
    }

    // generate salt & hash password
    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = new UserModel({
        ...userData,
        email: newEmail,
        name: newUsername,
        password: hashedPassword
    });

    await newUser.save();

    return newUser;

};

const loginUser = async (data) => {
    const email = data.email.toLowerCase().trim();

    // find user by email
    const user = await UserModel.findOne({
        email: email
    });

    if(!user){
        throw new Error(`Invalid email or password`);
    }

    // compare password
    const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
    );

    if(!isPasswordValid){
        throw new Error(`Invalid email or password`);
    }

    return user;

    
}

const getUserByEmail = async (email) => {
    const userEmail = await UserModel.findOne({
        email: email.toLowerCase().trim()
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
            runValidators: true
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
    loginUser,
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById
}