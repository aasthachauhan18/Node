const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


const USERS_FILE = path.join(__dirname, 'users.json');

function readUsers() {
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
}

function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}


app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'))
});
app.get('/home' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','home.html'))
});
app.get('/about' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','about.html'))
});
app.get('/contact' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','contact.html'))
});
app.get('/register' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','registration.html'))
});
app.post('/register', (req, res) => {
    console.log(req.body);
    
    const { username, email, password ,male,female } = req.body;

    let users = readUsers();

    
    const userExists = users.find(u => u.email === email);
    if (userExists) {
        return res.send('User already registered!');
    }

    users.push({ username, email, password,male,female });
    writeUsers(users);

    res.cookie("users",email)

    res.send(`
        <h2>Registration Successful</h2>
        <a href="/login">Go to Login</a>
    `);
});

app.get('/login' , (req,res) => {
    res.sendFile(path.join(__dirname,'views','login.html'))
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const users = readUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.send('Invalid Email or Password');
    }

    res.cookie("users",email)
    res.send(`
        <h2>Login Successful</h2>
        <h3>Welcome ${user.username}</h3>
        <a href="/home">Go to Home</a>
    `);
});

// const loginMiddleware = (req,res,next) =>{
//     const user = req.cookie.user;

//     if (!user) {
//         return res.status(400).send("Login First")
//     }
//     next();
// }


// app.get("/dashboard", authMiddleware, (req, res) => {
//   res.send(`Dashboard - Welcome ${req.cookies.user}`);
// });

app.get('/api/status', (req, res) => {
    res.json({
        status: "success",
        server: "running"
    });
});




app.listen(PORT,() => {
    console.log(`Server Started at ${PORT} port`);
    
})