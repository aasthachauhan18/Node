// Import Student model
// This model represents the MongoDB collection using Mongoose schema
// It allows us to perform database operations like create, find, update, delete
const Student = require("../models/Students");


// ======================================================
//                CREATE STUDENT
// ======================================================

// exports.createStudent means we are exporting this function
// so it can be used inside studentRoutes.js
// async keyword is used because database operations take time
// await waits until the database operation completes

exports.createStudent = async (req, res) => {

    // req.body contains data sent from frontend (POST request)
    // Example:
    // {
    //   "name": "John",
    //   "age": 20,
    //   "course": "BCA"
    // }

    // Student.create() inserts new record into MongoDB
    const student = await Student.create(req.body);

    // Send response with status 201 (Created)
    // Return newly created student as JSON
    res.status(201).json(student);
};



// ======================================================
//                READ ALL STUDENTS
// ======================================================

exports.getStudents = async (req, res) => {

    // Student.find() fetches ALL documents from students collection
    const students = await Student.find();

    // Send array of students as JSON response
    res.json(students);
};



// ======================================================
//                READ SINGLE STUDENT
// ======================================================

exports.getStudentById = async (req, res) => {

    // req.params.id comes from URL
    // Example: /api/students/65a123bc
    // req.params.id = "65a123bc"

    // findById() finds document using MongoDB _id
    const student = await Student.findById(req.params.id);

    // Send single student object as JSON
    res.json(student);
};



// ======================================================
//                UPDATE STUDENT
// ======================================================

exports.updateStudent = async (req, res) => {

    // findByIdAndUpdate parameters:
    // 1st → ID of document
    // 2nd → New data to update
    // 3rd → Options

    const student = await Student.findByIdAndUpdate(
        req.params.id,   // Student ID from URL
        req.body,        // Updated data from frontend
        { new: true }    // Return updated document (not old one)
    );

    // Send updated student data
    res.json(student);
};



// ======================================================
//                DELETE STUDENT
// ======================================================

exports.deleteStudent = async (req, res) => {

    // findByIdAndDelete() removes document from database
    await Student.findByIdAndDelete(req.params.id);

    // Send confirmation message
    res.json({ message: "Student deleted" });
};



// ======================================================
//        ALTERNATIVE EXPORT METHOD (COMMENTED)
// ======================================================

// Instead of exports.functionName,
// we can export all functions together like this:

// module.exports = {
//     createStudent,
//     getStudents,
//     getStudentById,
//     updateStudent,
//     deleteStudent
// };



// Just to confirm controller file is executed
console.log("Controller");
