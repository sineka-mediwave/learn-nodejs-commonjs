const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const app = express();
app.use(morgan("combined"));

const favs = [];

// reading READ
app.get("/", (req, res) => {
  return res.json({
    data: {
      favs,
    },
  });
});

app.post("/", (req, res) => {
  //   console.log("==> ", req.body);
  //   console.log("==> ", req.method);
  //   console.log("==> ", req.headers);
  //   console.log("==> ", req.path);

  favs.push({
    id: new Date().getTime(),
    text: req.body.text,
  });
  return res.json({
    message: "added data",
  });
});

// Update
app.put("/", (req, res) => {
  return res.json({
    message: "PUT route",
  });
});

// DELETE
app.delete("/", (req, res) => {
  return res.json({
    message: "DELETE route",
  });
});
//importing utils using common js
const { stringLength } = require("./utils/stringHelper");
console.log("hello World");
console.log(stringLength("12453"));

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
