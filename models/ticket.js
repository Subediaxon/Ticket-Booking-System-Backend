const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  from: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  to: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  number: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

ticketSchema.set("toJSON", {
  virtuals: true,
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
