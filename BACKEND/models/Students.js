// Import mongoose library
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
// It helps us define schema and interact with MongoDB easily
const mongoose = require("mongoose");


// =======================================================
//              CREATE SCHEMA
// =======================================================

// Create a new Schema
// Schema defines the structure of documents inside MongoDB collection
// It tells what fields will exist and their data types

const studentSchema = new mongoose.Schema({

    // -----------------------------------
    // NAME FIELD
    // -----------------------------------
    name: {
        type: String,        // Data type must be String
        required: true       // This field is mandatory
                              // If not provided, MongoDB will throw validation error
    },


    // -----------------------------------
    // EMAIL FIELD
    // -----------------------------------
    email: {
        type: String,        // Email stored as String
        // Not required → optional field
    },


    // -----------------------------------
    // COURSE FIELD
    // -----------------------------------
    course: {
        type: Number,        // Course stored as Number
                             // Example: 101, 202 etc.
    },


    // -----------------------------------
    // CREATED DATE FIELD
    // -----------------------------------
    createdAt: {
        type: Date,          // Stored as Date object
        default: Date.now    // Automatically sets current date/time
                             // when document is created
    }

});


// =======================================================
//            CREATE & EXPORT MODEL
// =======================================================

// mongoose.model("Student", studentSchema)

// "Student" → Model Name
// MongoDB collection name becomes: students (lowercase + plural automatically)

// studentSchema → Structure of document

// After creating model, we can use:
// Student.create()
// Student.find()
// Student.findById()
// Student.findByIdAndUpdate()
// Student.findByIdAndDelete()

module.exports = mongoose.model("Student", studentSchema);


// Just to confirm model file is executed
console.log("Model");
