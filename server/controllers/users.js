const User = require("../db/models/user"),
  { sendWelcomeEmail } = require("../emails/"),
  jwt = require("jsonwebtoken");

// ***********************************************//
// Create a user
// ***********************************************//
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a user
// ***********************************************//
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
// ***********************************************//
// Delete a user
// ***********************************************//
// exports.deleteUser = async (req, res) => {
//   try {
//     await req.user.remove();
//     sendCancellationEmail(req.user.email, req.user.name);
//     res.clearCookie('jwt');
//     res.json({ message: 'user deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
