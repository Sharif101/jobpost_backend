const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  const dbUser = await User.findOne({ email: email }).exec();
  if (dbUser) {
    const match = await (password, dbUser.password);
    if (match) {
      const token = jwt.sign(
        {
          _id: dbUser._id,
          name: dbUser.name,
          email,
        },
        process.env.JWT_LOGIN_TOKEN,
        {
          expiresIn: "2d",
        }
      );

      res.json({
        message: "Login Successful",
        token,
      });
    } else {
      res.status(400).json({ message: "Email or Password incorrect" });
    }
  } else {
    res.status(400).json({ message: "No user found with this Email" });
  }
};

module.exports = {
  login,
};
