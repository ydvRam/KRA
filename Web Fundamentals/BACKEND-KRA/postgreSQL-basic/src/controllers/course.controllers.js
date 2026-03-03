const pool = require("../config/db");

// create course --->
exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO courses(title, description) VALUES ($1,$2) RETURNING*", [title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// get course -->
exports.getCourses = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM courses ORDER BY id DESC LIMIT 10"
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// edit by id --->
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    await pool.query(
      "UPDATE courses SET title=$1 WHERE id=$2",
      [title, id]
    );

    res.json({ message: "Course updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete --->
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(
      "DELETE FROM courses WHERE id=$1",
      [id]
    );

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};