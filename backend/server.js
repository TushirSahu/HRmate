const express = require("express");
const dot = require("dotenv");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connection = require("./config/db");
const cors = require("cors");

dot.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 8000;

connection();

const userRoutes = require("./routes/user");
const listRoutes = require("./routes/list")

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/v1", userRoutes)
app.use("/api/v1/list", listRoutes)
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Hello World");
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}\nClosing server`.bold.red);
  server.close(() => {
    process.exit(1);
  });
});

const server = app.listen(PORT, () => {
  console.log(
    `The Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.green
  );
});