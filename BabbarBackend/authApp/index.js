const express = require("express");
const app = express();

require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 4000;

app.use(express.json());
