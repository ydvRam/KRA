const pool = require("../config/db");

// CREATE student
exports.createStudent = async (req, res) => {
  console.log("BODY:", req.body);
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getStudents = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM students ORDER BY id DESC LIMIT 10"
  );

  res.json(result.rows);
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await pool.query(
    "UPDATE students SET name=$1 WHERE id=$2",
    [name, id]
  );

  res.json({ message: "Updated successfully" });
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM students WHERE id=$1",
    [id]
  );

  res.json({ message: "Deleted successfully" });
};