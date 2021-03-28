const mongoose = require("mongoose");

const availableRouteSchema = new mongoose.Schema({
  route_from: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  route_to: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  vehicle_number: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  travelDate: {
    type: Date,
    required: true,
  },
});

const availableRoutes = mongoose.model("Available_Route", availableRouteSchema);

module.exports = availableRoutes;
