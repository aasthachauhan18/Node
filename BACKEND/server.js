// Import Express framework
// Express is a minimal and flexible Node.js web application framework
const express = require("express");

// Import CORS middleware
// CORS (Cross-Origin Resource Sharing) allows frontend (like React)
// running on a different port/domain to access this backend API
const cors = require("cors");

// Import dotenv package
// dotenv loads environment variables from a .env file into process.env
const dotenv = require("dotenv");

// Import custom database connection function
// This file usually contains MongoDB connection logic using mongoose
const connectDB = require("./config/db");


// Load environment variables from .env file
// Example: PORT=5000, MONGO_URI=your_database_connection_string
dotenv.config();


// Call the database connection function
// This establishes connection with MongoDB before starting the server
connectDB();


// Create an Express application
// "app" is the main object that handles requests and responses
const app = express();


// ======================
//        MIDDLEWARE
// ======================

// Enable CORS for all routes
// Without this, frontend (React at localhost:3000) cannot call backend (localhost:5000)
app.use(cors());    

// Built-in middleware to parse incoming JSON data
// Required to read req.body in POST/PUT requests
// Example: { "name": "John", "age": 20 }
app.use(express.json());


// Example of a simple route (currently commented)
// This would respond when user visits: http://localhost:5000/
// app.get("/", (req, res) => {
//     res.send("API is running...");
// });


// ======================
//        ROUTES
// ======================

// All routes inside studentRoutes.js will be prefixed with:
// http://localhost:5000/api/students
//
// Example:
// GET    /api/students        -> Get all students
// POST   /api/students        -> Add student
// PUT    /api/students/:id    -> Update student
// DELETE /api/students/:id    -> Delete student

app.use("/api/students", require("./routes/studentRoutes"));


// ======================
//        SERVER
// ======================

// Get PORT from environment variable
// If not defined, use 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server and listen on given port
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);

// Simple console log to confirm this file is executed
console.log("Server.js");
