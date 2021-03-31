const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userCreation: {
    type: Date,
    default: Date.now(),
  },
});
userSchema.set("toJSON", {
  virtuals: true,
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
