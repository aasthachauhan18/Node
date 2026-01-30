const express = require('express');
const fs = require("fs");
const cookieParser = require("body-parser");
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Home.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/registration.html'));
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

  users.push({ email, password });

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.cookie("user", email); 

  res.send("✅ Registration successful");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

  const userFound = users.find(
    user => user.email === email && user.password === password
  );

  if (!userFound) {
    return res.status(401).send("❌ Invalid credentials");
  }

  res.cookie("user", email);
  res.send("✅ Login successful");
});

const authMiddleware = (req, res, next) => {
  const user = req.cookies.user;

  if (!user) {
    return res.status(403).send("🚫 Please login to access dashboard");
  }

  next(); // user is logged in
};
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send(`📊 Dashboard - Welcome ${req.cookies.user}`);
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.send("👋 Logged out successfully");
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
