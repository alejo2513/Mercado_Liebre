const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4001;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});
app.listen(PORT, () => console.log("corriendo port 4001"));
