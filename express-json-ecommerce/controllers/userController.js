const data = require("../data/users");


exports.createUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: data.nextId++,
    name,
    email
  };

  data.users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
};


exports.getAllUsers = (req, res) => {
  res.json(data.users);
};





exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = data.users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.json({
    message: "User updated successfully",
    data: user
  });
};


exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  data.users.splice(index, 1);

  res.json({ message: "User deleted successfully" });
};
