const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT ? process.env.PORT : 3000, () => {
  console.log("Se prendió!");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/Login", function (req, res) {
  res.sendFile(path.join(__dirname, "views/Login.html"));
});
