const { Router } = require("express");
const {
  routesController,
  getAllRoutes,
} = require("../controller/routeController");

const router = Router();

router.route("/").post(routesController);
router.route("/").get(getAllRoutes);
module.exports = router;
