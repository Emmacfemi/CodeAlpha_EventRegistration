require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectIoInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MONGODB Connected Successfully!!!
            ${connectIoInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection Failed`, error.message);
        process.exit();
        
    }
};

module.exports = connectDB;