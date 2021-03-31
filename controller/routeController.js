const Routes = require("../models/routes");

const routesController = async (req, res) => {
  const { route_from, route_to, vehicle_number, travel_Date } = req.body;
  try {
    const savedData = await Routes.create({
      route_from,
      route_to,
      vehicle_number,
      travel_Date,
    });
    const populatedUser = await savedData
      .populate("route_from", "route_to", "vehicle_number", "travel_Date")
      .execPopulate();
    console.log(populatedUser);
    res
      .status(200)
      .send({ message: "route created sucessfully", data: populatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

const getAllRoutes = async (req, res) => {
  const allRoutes = await Routes.find({});
  res.header("Content-Range", "routes 0-20/20");

  res.send(allRoutes);
};

module.exports = { routesController, getAllRoutes };
