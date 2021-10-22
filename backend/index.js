const express = require("express");
const cors = require("cors");
const connection = require("./db/connect");
require("dotenv").config();
const app = express();
const videoRoutes = require("./router/video.js");

//middleware
app.use(express.json());
app.use(cors());

//route handlers
app.use("/video", videoRoutes);

//Connect to server and Database
const connectDB = async () => {
  try {
    await connection(process.env.MONGO_URL);
    app.listen(8080, () => console.log("listening on port 8080"));
    console.log("Connect to DB");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
