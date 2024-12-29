const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://frontend-teelab-vercel.vercel.app",
    ],
    credentials: true,
  })
);
app.use(morgan("common"));
app.use(express.json());
app.use(cookieParser());

module.exports = app;
