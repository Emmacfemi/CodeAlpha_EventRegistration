require("dotenv").config();

const app = require("./app");


const PORT = process.env.PORT;

const startServer = async () => {
    try {
        // await connectDB();

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