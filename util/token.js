const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
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

const decodeToken = expressJWT({ secret: JWT_SECRET, algorithms: ["HS256"] });

module.exports = { createToken, decodeToken };
