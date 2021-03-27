const Ticket = require("../models/ticket");

const bookTicketController = async (req, res) => {
  const data = req.body;
  const { user } = req;
  try {
    const savedData = await Ticket.create({ ...data, customer: user.sub });
    const populatedUser = await savedData
      .populate("customer", "email")
      .execPopulate();
    res
      .status(200)
      .send({ message: "ticket booked sucessfully", data: populatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

const getAllTicket = async (req, res) => {
  const allticket = await Ticket.find({});
  res.header("Content-Range", "tickets 0-20/20");

  res.send(allticket);
};

module.exports = { bookTicketController, getAllTicket };
