// Import mongoose library
// Mongoose is used to connect Node.js application with MongoDB
const mongoose = require("mongoose");


// ==========================================================
//               DATABASE CONNECTION FUNCTION
// ==========================================================

// connectDB is a function that connects our application
// to MongoDB using connection string stored in .env file

const connectDB = () => {

    // mongoose.connect() connects to MongoDB
    // process.env.MONGO_URI comes from .env file
    // Example:
    // MONGO_URI=mongodb://127.0.0.1:27017/studentDB
    // OR
    // MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

    mongoose
        .connect(process.env.MONGO_URI)

        // If connection is successful
        .then(() => {
            console.log("MongoDB Connected");
        })

        // If connection fails
        .catch((error) => {

            // Print error in console
            console.error(error);

            // Stop the Node.js process immediately
            // 1 means exit with failure
            process.exit(1);
        });
};


// Export this function so it can be used in server.js
module.exports = connectDB;


// Just to show file execution (optional)
// console.log("db");
