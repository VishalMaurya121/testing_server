const express = require("express");
require('dotenv').config({ debug: true });

const app = express();

app.get("/", (req, res) => {
  res.send("hello dunia..");
});

app.get("/message", (req, res) => {
  return res.status(200).json({
    loading: true,
    message: "must hai bhai",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}...`);
});
