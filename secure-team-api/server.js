require("dotenv").config();
const express = require("express");

const app = express();

const employeeRoutes = require('./routes/employeeRoutes')
app.use(express.json());

const PORT = process.env.PORT || 5000


app.get('/health', (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.use('/employee',employeeRoutes);
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
    
});