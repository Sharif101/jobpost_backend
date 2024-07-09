const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const userRoute = require("./Route/userRoute");

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Credentials","true");
  res.send("api is runing");
});

app.use("/", userRoute);

const server = app.listen(PORT, console.log(`server is runnig on ${PORT}`));
