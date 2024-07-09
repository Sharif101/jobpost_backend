// auth check jwt theke token ta niye post method e user found

const jwt = require("jsonwebtoken");

const auth = (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_LOGIN_TOKEN);

      res.json({
        auth: true,
        data: decode,
      });
    } catch (error) {
      res.json({
        auth: false,
        data: error.message,
      });
    }
  } else {
    res.json({
      auth: false,
      data: "No token found in request",
    });
  }
};

module.exports = {
  auth,
};
