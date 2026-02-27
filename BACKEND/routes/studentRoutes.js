// Import express framework
// We need express to create router object
const express = require("express");


// Create a router instance
// Router is used to define route handlers separately
// instead of writing all routes inside server.js
const router = express.Router();


// Import controller functions
// These functions contain the actual business logic
// (database operations like create, read, update, delete)
const {
    createStudent,      // Function to create new student
    getStudents,        // Function to get all students
    getStudentById,     // Function to get one student by ID
    updateStudent,      // Function to update student by ID
    deleteStudent       // Function to delete student by ID
} = require("../controllers/studentController");


// ==============================
//           ROUTES
// ==============================


// CREATE STUDENT
// POST request to:  /api/students/
// Calls createStudent controller function
// Used to insert new student into database
router.post("/", createStudent);



// READ ALL STUDENTS
// GET request to:  /api/students/
// Calls getStudents controller function
// Returns all students from database
router.get("/", getStudents);



// READ ONE STUDENT
// GET request to:  /api/students/:id
// :id is a dynamic parameter
// Example: /api/students/65ab1234
// Calls getStudentById controller
router.get("/:id", getStudentById);



// UPDATE STUDENT
// PUT request to:  /api/students/:id
// Updates existing student using ID
// Calls updateStudent controller
router.put("/:id", updateStudent);



// DELETE STUDENT
// DELETE request to:  /api/students/:id
// Deletes student from database using ID
// Calls deleteStudent controller
router.delete("/:id", deleteStudent);



// Export router
// This allows server.js to use these routes
// server.js uses:
// app.use("/api/students", require("./routes/studentRoutes"));
module.exports = router;


// Just to confirm this file is executed
console.log("Route");
