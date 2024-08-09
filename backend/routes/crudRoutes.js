const express = require("express");
const {
  addUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controller/crudController");

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
