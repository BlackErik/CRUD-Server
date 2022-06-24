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

app.get("/kitten/:id", (req, res) => {});

app.get("/kittens", (req, res) => {});

app.put("/kitten/:id", (req, res) => {});

app.patch("/kitten/:id", (req, res) => {});

app.delete("/kitten/:id", (req, res) => {});

module.exports = app;
