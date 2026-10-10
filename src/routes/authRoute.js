const express = require("express");

const authRoutes = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createUser,
    loginUser,
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
} = require ("../controllers/authController");

const {
    postUserSchema,
    updateUserSchema,
    loginUserSchema
} = require("../validations/userValidation");


// TEST
authRoutes.get("/test", (req, res) => {
    res.status(200).json({
        message: `Authentications running successfully`
    });

});


// REGISTER
authRoutes.post("/register", postUserSchema, createUser);


// LOGIN
authRoutes.post("/login", loginUserSchema, loginUser);


// GET ALL USERS
authRoutes.get("/", authMiddleware, getAllUsers);


// GET USER BY EMAIL
authRoutes.get("/email/:email", authMiddleware, getUserByEmail);


// GET USER BY ID
authRoutes.get("/:id", authMiddleware, getUserById);


// UPDATE USER
authRoutes.put("/:id", authMiddleware, updateUserSchema, updateUser);


// DELETE USER
authRoutes.delete("/:id", authMiddleware, deleteUser)


module.exports = authRoutes;