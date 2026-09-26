require("dotenv").config();

const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const app = require("./app");

const connectDB = require("./database/connectDB");


const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", error => {
            console.log("ERROR", error);
            throw error

        });

        app.listen(PORT, () => {
            console.log(`Listening from https://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.log(`MONGODB CONNECTION FAILED`, error);
        
    }
};

startServer();