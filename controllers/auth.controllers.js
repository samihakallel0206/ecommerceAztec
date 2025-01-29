const User = require("../models/User");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email should be unique!" }] });
    }
    // const newUser = new User({ ...req.body });
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    const newUser = new User({ name, email, password: hashPassword, phone });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({
        success: [{ message: "Registered successfully!!!" }],
        user: newUser,
        token,
      });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Can't register!" }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ errors: [{ msg: "Bad Credentails1" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      return res.status(400).json({ errors: [{ msg: "Bad Credentails2" }] });
    }
    const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({
        success: [{ msg: "Login successfully" }],
        user: foundUser,
        token,
      });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Can't login!" }] });
  }
};
