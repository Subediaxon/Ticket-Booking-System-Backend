const { Router } = require("express");
const { bookTicketController } = require("../controller/ticketController");
const { decodeToken } = require("../util/token");

const router = Router();

router.route("/").post(decodeToken, bookTicketController);

module.exports = router;
