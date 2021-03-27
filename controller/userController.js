const jwtDecode = require("jwt-decode");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../util/bcrypt");

const { createToken } = require("../util/token");

const loginController = async (req, res) => {
  try {
    // exttract email and password from request body
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean();

    // if email s not found
    if (!user)
      return res.status(400).send({ error: "email/password didn't match" });

    // if email is found, compare passwords
    if (await comparePassword(password, user.password)) {
      const { password, __v, ...rest } = user;
      const token = createToken(rest);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      return res.send({ userInfo: rest, token, expiresAt });
    }

    // if password doesn't match
    res.status(400).send({ error: "email/password didn't match" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

const signupController = async (req, res) => {
  try {
    // exttract email and password from request body
    const { email, password, firstName, lastName } = req.body;

    // check if user with email already exists
    const isUser = await User.findOne({ email });
    if (isUser) return res.status(400).send({ error: "email already exists" });

    // hash password
    const hashedPassword = await hashPassword(password);

    // save user to database
    const savedUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // send user data if user is sucessfully added to database
    if (savedUser) {
      const { _id, email, firstName, lastName } = savedUser;
      const token = createToken({ _id });

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      return res.send({
        userInfo: { _id, email, firstName, lastName },
        token,
        expiresAt,
      });
    }
  } catch (error) {
    res.status(500).send({ error: "something went wrong" });
  }
};

const getAllUser = async (req, res) => {
  const allUsers = await User.find({});
  console.log(allUsers);
  // res.header("Content-Range", "users 0-10/10");
  res.send(allUsers);
};
module.exports = { loginController, signupController, getAllUser };
