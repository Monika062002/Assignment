const express = require('express');
const app = express();
const PORT = 5000;

const userRoutes = require('./users');

app.use(express.json());

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});