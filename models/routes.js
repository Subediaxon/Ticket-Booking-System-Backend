const mongoose = require("mongoose");

const routesSchema = new mongoose.Schema({
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
  travel_Date: {
    type: Date,
    required: true,
  },
});

routesSchema.set("toJSON", {
  virtuals: true,
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Routes = mongoose.model("Routes", routesSchema);

module.exports = Routes;
