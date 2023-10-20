const express = require("express");
const config = require("./config");
const app = express();
// app.use(express.json());

const favs = [];

// reading READ
app.get("/", (req, res) => {
  return res.json({
    data: {
      favs,
    },
  });
});

//importing utils using common js
const { stringLength } = require("./utils/stringHelper");
console.log("hello World");
console.log(stringLength("12453"));

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
