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
  // when connecting
  db.once("connecting", () => {
    console.log("Connecting to MongoDB");
  });

  // when connected
  db.once("connected", () => {
    console.log("Connected to MongoDB");
  });

  // when connection is open
  db.once("open", () => {
    console.log("Open Connection to MongoDB");
    callback();
  });

  // when there is an error in connecting
  db.once("error", () => {
    console.log("Error Connecting to MongoDB");
  });
}

module.exports = {
  connect,
  setUpConnectionHandlers,
};
