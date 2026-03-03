const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controllers");

router.post("/courses", courseController.createCourse);
router.get("/courses", courseController.getCourses);
router.put("/courses/:id", courseController.updateCourse);
router.delete("/course:id", courseController.deleteCourse);

module.exports = router;