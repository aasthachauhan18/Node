const express = require('express');
const connection = require('./db');

const app = express();

connection();
app.use(express.json())

app.get('/',(req,res) =>{
    res.send(`Server starts`);
});

app.listen(5000,()=>{
    console.log("Server starts at 5000");
    
})