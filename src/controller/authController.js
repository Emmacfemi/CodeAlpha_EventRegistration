const UserService = require("../services/authService");


const createUser = async (req, res, next) => {
    try{
        const newUser = await UserService.createUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const userResponse = newUser.toObject();
        delete userResponse.password;

        return res.status(201).json({
            message: `User created successfully`,
            user: userResponse
        });

    } catch(error){
        next(error);
    }

}

const getUserByEmail = async (req, res, next) => {
    try{
        const user = await UserService.getUserByEmail(req.params.email);

        if(!user){
            return res.status(404).json({
                message: `User not found`
            });
        }

        return res.status(200).json({
            message: `User fetched successfully`,
            user: user
        });

    }catch(error){
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try{
        const user = await UserService.getUserById(req.params.id);

        if(!user){
            return res.status(404).json({
                message: `User not found`
            });
        }

        return res.status(200).json({
            message: `User fetched successfully`,
            user: user
        });
    }catch(error){
        next(error);
    }
}

const getAllUsers = async (req, res, next) => {
    try{
        const user = await UserService.getAllUsers();

        return res.status(200).json({
            message: `All Users fetched successfully`,
            user: user
        });

    }catch(error){
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const updatedUser = await UserService.updateUserById(
            req.params.id,
            req.body
        );

        if(!updatedUser){
            return res.status(404).json({
                message: `User not found`
            });
        }

        return res.status(200).json({
            message: `User updated successfully`,
            user: updatedUser
        });

    }catch(error){
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await UserService.deleteUserById(
            req.params.id,
        );

        if(!deletedUser){
            return res.status(404).json({
                message: `User not found`
            });
        }

        return res.status(200).json({
            message: `User deleted successfully`,
            user: deletedUser
        });

    }catch(error){
        next(error);
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
}