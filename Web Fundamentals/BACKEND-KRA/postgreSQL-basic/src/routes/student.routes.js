const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controllers");
router.post("/students", studentController.createStudent);
router.get("/students", studentController.getStudents);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent)

module.exports = router;