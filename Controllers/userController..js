const User = require("../Model/userModel");

//registration user
const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addUser };
