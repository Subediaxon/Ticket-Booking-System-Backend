const { Router } = require("express");
const {
  loginController,
  signupController,
  getAllUser,
} = require("../controller/userController");

const router = Router();

router.route("/login").post(loginController);

router.route("/signup").post(signupController);

router.route("/getusers").get(getAllUser);

module.exports = router;
