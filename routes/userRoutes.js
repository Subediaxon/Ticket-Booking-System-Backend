const { Router } = require("express");
const {
  loginController,
  signupController,
} = require("../controller/userController");

const router = Router();

router.route("/login").post(loginController);

router.route("/signup").post(signupController);

module.exports = router;
