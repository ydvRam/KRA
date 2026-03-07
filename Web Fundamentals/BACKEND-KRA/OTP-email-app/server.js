require("dotenv").config();
const express = require("express");
const authRoute = require('./routes/auth.routes');
const app = express();
app.use(express.json());
app.use("/auth", authRoute);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})