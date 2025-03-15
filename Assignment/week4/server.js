const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Allow frontend requests

// Welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory users array
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update user by id)
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((u) => u.id == id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  res.json({ message: "User deleted" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});