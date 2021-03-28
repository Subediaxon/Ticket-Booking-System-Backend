const AvailableRoutes = require("../models/availableRoutes");

const availableRouteController = async (req, res) => {
  const data = req.body;
  const { user } = req;
  try {
    const savedData = await Ticket.create({ ...data, customer: user.sub });
    const populatedUser = await savedData
      .populate("route_from", "route_to", "vehicle_number", "travel_Date")
      .execPopulate();
    res
      .status(200)
      .send({ message: "route created sucessfully", data: populatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

const getAllRoutes = async (req, res) => {
  const allRoutes = await AvailableRoutes.find({});
  res.header("Content-Range", "tickets 0-20/20");

  res.send(allRoutes);
};

module.exports = { availableRouteController, getAllRoutes };
