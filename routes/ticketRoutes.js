const { Router } = require("express");
const {
  bookTicketController,
  getAllTicket,
} = require("../controller/ticketController");
const { decodeToken } = require("../util/token");

const router = Router();

router.route("/").post(decodeToken, bookTicketController).get(getAllTicket);

module.exports = router;
