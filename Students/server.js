const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const Student = require('./routes/studentRoute');

const app = express();
dotenv.config()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/students',Student);

PORT = process.env.PORT || 5000

app.listen(PORT,() =>{
    console.log(`Server Starting at ${PORT}`);
    
});

