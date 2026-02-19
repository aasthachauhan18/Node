import User from "../models/User.js";


export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user)
    return res.status(404).json({ message: "User not found" });

  res.json(user);
};


export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.role = req.body.role || user.role;

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role
  });
};


export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return res.status(404).json({ message: "User not found" });

  await user.deleteOne();
  res.json({ message: "User removed" });
};
