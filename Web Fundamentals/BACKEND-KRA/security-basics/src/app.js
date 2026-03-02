const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send('API Running successfully ');
});
module.exports = app;