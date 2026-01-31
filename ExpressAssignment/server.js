const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    const { username, email, password } = req.body;

    let users = readUsers();

    
    const userExists = users.find(u => u.email === email);
    if (userExists) {
        return res.send('User already registered!');
    }

    users.push({ username, email, password });
    writeUsers(users);

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

    res.send(`
        <h2>Login Successful</h2>
        <h3>Welcome ${user.username}</h3>
        <a href="/home">Go to Home</a>
    `);
});


app.get('/api/status', (req, res) => {
    res.json({
        status: "success",
        server: "running"
    });
});




app.listen(PORT,() => {
    console.log(`Server Started at ${PORT} port`);
    
})