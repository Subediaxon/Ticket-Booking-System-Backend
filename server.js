const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connectToDB = require("./database/mongoinit");

const app = express();
connectToDB();

app.use(express.json());
app.use(morgan("tiny"));

const userRouter = require("./routes/userRoutes");
const ticketRouter = require("./routes/ticketRoutes");
const routeRouter = require("./routes/routeRoutes");

const { PORT } = require("./util/config");

app.use("/api/authenticate", userRouter);
app.use("/api/ticket", ticketRouter);
app.use("/api/routes", routeRouter);

app.listen(PORT, () => {
  console.log("server has started");
});
