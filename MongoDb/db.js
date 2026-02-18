const mongoose = require('mongoose');

const connectDB = async() =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb Connected : ${conn.connection.host}`);
    
  } catch (error) {
    console.log("MongoDb Failed");
    
    const dateTime = new Date();
    
    const errorText = `
    Connection Failed
    Date-Time: ${dateTime}
    Error: ${error.message}
    `;
    
    fs.appendFileSync("connection-error.txt", errorText);
    process.exit(1);
    }
}

module.exports = connectDB;
    
  






// const mongoose = require("mongoose");
// const fs = require("fs");

// // mongodb+srv://chauhanaastha1810_db_user:<db_password>@cluster0.bx3vjnj.mongodb.net/
// // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/<dbname>?retryWrites=true&w=majority";

// function connectDB() {
//   console.log("called");
//   // mongoose.connect("mongodb+srv://chauhanaastha1810_db_user:Aashu@1810@cluster0.bx3vjnj.mongodb.net/testing?retryWrites=true&w=majority")
//   mongoose.connect("mongodb+srv://chauhanaastha1810_db_user:1HAoWXprA31iX5yg@cluster0.bx3vjnj.mongodb.net/?appName=Cluster0")
//   // mongoose.connect("mongodb+srv://chauhanaastha1810_db_user:1HAoWXprA31iX5yg@<cluster-address>/<dbname>?retryWrites=true&w=majority")
//     .then(() => {
//       console.log("MongoDB Connected");
//     })
//     .catch((error) => {
//       console.log("MongoDB Failed");

//       const dateTime = new Date();

//       const errorText = `
// Connection Failed
// Date-Time: ${dateTime}
// Error: ${error.message}
// `;

//       fs.appendFileSync("connection-error.txt", errorText);
//     });
// }

// module.exports = connectDB;
