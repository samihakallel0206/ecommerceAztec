const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const listUsers = await User.find();
    res.status(200).json({ success: { msg: "List of Users is:" }, listUsers });
  } catch (error) {
    res.status(400).json({ errors: { msg: "Can't get Users" } });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const UserToDelete = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: { msg: "Deleted Successfully" }, UserToDelete });
  } catch (error) {
    res.status(400).json({ errors: { msg: "Can't delete User" } });
  }
};
