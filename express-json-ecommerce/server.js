const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
