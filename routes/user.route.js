const express = require("express");
const router = express.Router();
const { getAllUsers, deleteUser } = require("../controllers/user.controllers");
const isAdmin = require("../middleware/isAdmin");

// test route user
// router.get("/test", (req, res) => {
//   res.send("test of user route");
// });
// get all users
router.get("/allUsers", isAdmin, getAllUsers);
// delete one user
router.delete("/:id", isAdmin, deleteUser);


module.exports = router;
