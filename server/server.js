const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
require("./db/connect");

const cors = require("cors");
app.use(cors());

app.use(express.json());
const route = require("./routes/route");
app.use(route);

let PORT = process.env.PORT || 6800;

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
