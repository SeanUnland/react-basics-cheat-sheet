require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();

const { PORT = 5002, NODE_ENV = "development" } = process.env;

const cors = require("cors");
const corsOptions = require("./config/cors");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello World" });
});

const catRouter = require("./controllers/Cat.js");
app.use("/cats", catRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
