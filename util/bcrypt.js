const bcrypt = require("bcrypt");

const hashPassword = async (plainPassword) => {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
