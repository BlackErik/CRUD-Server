const mongoose = require("mongoose");

const db = mongoose.connection;

const passwd = "BlackErik";

function connect(user, password, host, port, db) {
  const connectionString = `mongodb+srv://BlackErik:${passwd}@cluster0.hlplwck.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

function setUpConnectionHandlers(callback) {
  db.once("connecting", () => {
    console.log("Connecting to MongoDB");
  });

  db.once("connected", () => {
    console.log("Connected to MongoDB");
  });

  db.once("open", () => {
    console.log("Open connection to MongoDB");
  });

  db.once("error", () => {
    console.log("Error connecting to MongoDB");
  });
}

module.exports = {
  connect,
  setUpConnectionHandlers,
};
