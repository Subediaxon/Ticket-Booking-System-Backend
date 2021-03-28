const { Router } = require("express");
const {
  availableRouteController,
  getAllRoutes,
} = require("../controller/availableRouteController");
const { decodeToken } = require("../util/token");

const router = Router();

router.route("/").post(decodeToken, availableRouteController).get(getAllRoutes);

module.exports = router;
