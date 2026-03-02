const express = require("express");
const mongoose = require("mongoose");
const User = require("./modal/user");
require("dotenv").config();
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Simple Test API
app.get("/", (req, res) => {
  res.send("API Working Successfully 🚀");
});

app.post("/add-user", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});