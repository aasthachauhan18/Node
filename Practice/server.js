const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const Users = require('./routes/userRoute')

dotenv.config()
connectDb();

const app = express()
app.use(cors());
app.use(express.json())


app.use("/user",Users);

const PORT = process.env.PORT || 5000

app.listen(PORT,() =>{
    console.log(`Server Running at ${PORT}`);
    
});