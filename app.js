const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());
app.use("/", require("./router/query"));
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
