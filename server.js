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

app.get("/kitten/:id", (req, res) => {
  const id = req.params.id;
  Kitten.findById(id)
    .then((kitten) => {
      if (kitten == null) {
        res.status(404).json({ message: "not found" });
        return;
      }
      res.json(kitten);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get("/kittens", (req, res) => {
  Kitten.find()
    .then((kittens) => {
      res.json(kittens);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.put("/kitten/:id", (req, res) => {
  const id = req.params.id;
  const kitten = setUpKitten(req.body);
  Kitten.findByIdAndUpdate(id, kitten, { new: true })
    .then((kitten) => {
      if (kitten == null) {
        res.status(404).json({ message: "not found" });
        return;
      }
      res.json(kitten);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.patch("/kitten/:id", (req, res) => {});

app.delete("/kitten/:id", (req, res) => {
  const id = req.params.id;
  Kitten.findByIdAndDelete(id)
    .then((kitten) => {
      if (kitten == null) {
        res.status(404).json({ message: "not found" });
        return;
      }
      res.json(kitten);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = app;
