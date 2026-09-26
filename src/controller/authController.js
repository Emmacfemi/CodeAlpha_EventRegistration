const UserService = require("../services/authService");

const createUser = async (req, res, next) => {
    try{
        const newUser = new UserService.createUser({
            name: req.boy.name,
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save();

        return res.status(201).json({
            message: `User created successfully`,
            user: user
        });
    } catch(error){
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
        const updateUser = await UserService.updateUserById(
            req.params.id,
            req.body
        );

        if(!updateddUser){
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
            req.body
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
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
}