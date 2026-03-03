require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const studentRoutes = require("./src/routes/student.routes");
const courseRoutes = require("./src/routes/course.routes");

const app = express();
app.use(express.json());

app.use("/api", studentRoutes);
app.use("/api", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});