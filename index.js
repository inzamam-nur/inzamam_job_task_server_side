const express = require("express");
const app = express();
const port = process.env.Port || 5000;

const cors = require("cors");

app.use(cors());
const course = require("./Data/course.json");
const coursesname = require("./Data/coursesname.json");

app.get("/", (req, res) => {
  res.send("Api Running");
});





app.listen(port, () => {
  console.log("running", port);
});
