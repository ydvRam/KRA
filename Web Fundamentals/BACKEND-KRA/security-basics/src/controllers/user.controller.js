// (Parameterized Query Used Here)

const pool = require("../config/db");
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Parameterized query
    const result = await pool.query(
      "INSERT INTO users(name,email,password) VALUES ($1,$2,$3) RETURNING * ", [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
module.exports = { createUser };