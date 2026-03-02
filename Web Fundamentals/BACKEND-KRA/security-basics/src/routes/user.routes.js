const express = require("express");
const router = express.Router();
const createUserDTO = require("../dtos/createUser.dto");
const validate = require("../middleware/validate.middleware");
const { createUser } = require("../controllers/user.controller");

router.post("/users", validate(createUserDTO), createUser);
module.exports = router;