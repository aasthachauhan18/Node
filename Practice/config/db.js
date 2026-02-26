const mongoose = require('mongoose');

const connectDb = () =>{
    console.log(process.env.MONGO_URL)
    mongoose
    .connect(process.env.MONGO_URL)
    
    .then(() => {
        console.log("MongoDb Connected");
        
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    });
}

module.exports = connectDb;