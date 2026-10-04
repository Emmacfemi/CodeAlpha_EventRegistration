const express = require("express");

const registrationRoutes = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    registerSchemaValidation,
    updateSchemaValidation
} = require("../validations/registrationValidation");

const {
    createRegister,
    getAllRegister,
    getRegisterById,
    updateRegister,
    deleteRegister
} = require("../controller/registrationController");


registrationRoutes.get("/test", (req, res) => {
    res.status(200).json({
        message: `Registration running successfully`
    });
});


// CREATE REGISTER
registrationRoutes.post("/", authMiddleware, registerSchemaValidation, createRegister);


// GET ALL REGISTERS
registrationRoutes.get("/", authMiddleware, getAllRegister);


// GET ONE REGISTER BY ID
registrationRoutes.get("/:id", authMiddleware, getRegisterById);


// UPDATE REGISTER
registrationRoutes.put("/:id", authMiddleware, updateSchemaValidation, updateRegister);


// DELETE REGISTER
registrationRoutes.delete("/:id", authMiddleware, deleteRegister);



module.exports = registrationRoutes;