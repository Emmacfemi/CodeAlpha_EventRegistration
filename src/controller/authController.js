const UserService = require("../services/authService");
const jwt = require("jsonwebtoken");

const createUser = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;

        
        const newUser = await UserService.createUser({
            name,
            email,
            password
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
        const user = await UserService.getUserByEmail(
            req.params.email
        );

        if(!user){
            return res.status(404).json({
                message: `User not found`
            });
        }

        const userResponse = user.toObject();
        delete userResponse.password;


        return res.status(200).json({
            message: `User fetched successfully`,
            user: userResponse
        });

    }catch(error){
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    try{
        const { email, password }  = req.body;

        const user = await UserService.loginUser({
            email,
            password
        });

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user._id
            },
                
            process.env.JWT_SECRET,
    
            {
                expiresIn: "7d"
            }
        );
        
        
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({
            message: `User Logged in successfully`,
            token,
            user: userResponse
        });

    }catch(error){
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try{
        const user = await UserService.getUserById(
            req.params.id
        );

        if(!user){
            return res.status(404).json({
                message: `User not found`
            });
        }
        
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({
            message: `User fetched successfully`,
            user: userResponse
        });

    }catch(error){
        next(error);
    }
}

const getAllUsers = async (req, res, next) => {
    try{
        const users = await UserService.getAllUsers();

        const userResponse = users.map((user) => {
            const userObject = user.toObject();
            delete userObject.password;

            return userObject;
        });

        return res.status(200).json({
            message: `All Users fetched successfully`,
            users: userResponse
        });

    }catch(error){
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const updatedUser = await UserService.updateUserById(
            req.user.userId,
            req.body
        );

        if(!updatedUser){
            return res.status(404).json({
                message: `User not found`
            });
        }

        const userResponse = updatedUser.toObject();
        delete userResponse.password;

        return res.status(200).json({
            message: `User updated successfully`,
            user: userResponse
        });

    }catch(error){
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await UserService.deleteUserById(
            req.user.userId
        );

        if(!deletedUser){
            return res.status(404).json({
                message: `User not found`
            });
        }

        const userResponse = deletedUser.toObject();
        delete userResponse.password;

        return res.status(200).json({
            message: `User deleted successfully`,
            user: userResponse
        });

    }catch(error){
        next(error);
    }
}

module.exports = {
    createUser,
    loginUser,
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
}