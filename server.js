const express = require("express");
const app = express();

app.use(express.json());

const Kitten = require("./kitten");

function setUpKitten(Data) {
  return {
    name: Data.name || "",
    color: Data.color || "",
    age: Data.age || 0,
  };
}

app.post("/kitten", (req, res) => {
  const vKitten = setUpKitten(req.body);
  Kitten.create(vKitten)
    .then((kitten) => {
      res.json(kitten);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = app;
