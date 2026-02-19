import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("before find by id ");
  const userData = await User.findOne({ _id: '6996f6b19bd33e7787958b57' }); // Use await
  console.log("after find by id ");
  console.log(userData);
  
  const userExists = await User.findOne({ email });
  console.log("userExists",userExists);
  console.log("after");
  
  if (userExists)
    return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed
  });

  res.status(201).json({
    _id: user._id,
    token: generateToken(user._id)
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  res.json({
    _id: user._id,
    token: generateToken(user._id)
  });
};