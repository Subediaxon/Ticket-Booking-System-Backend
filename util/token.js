const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const createToken = (user) => {
  // Sign the JWT
  return jwt.sign(
    {
      sub: user._id,
      iss: "api.bookingnepal",
      aud: "api.bookingnepal",
    },
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "1h" }
  );
};

module.exports = { createToken };
