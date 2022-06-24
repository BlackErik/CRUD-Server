const express = require("express");

const app = express();

const flags = require("flags");
flags.defineNumber("port", 3000, "ports for the https server to listen on ");
flags.parse();

const dotenv = require("dotenv");
const port = flags.get("port") || process.env.PORT || 4000;
