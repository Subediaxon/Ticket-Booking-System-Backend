const mongoose = require("mongoose");

const { DB_URI } = require("../util/config");

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`connected to database sucessfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
