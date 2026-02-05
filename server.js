const express = require("express");
require('dotenv').config({ debug: true });

const app = express();

app.get("/", (req, res) => {
  res.send("hello dunia..");
});

app.get("/message", (req, res) => {
  return res.status(200).json({
    Success: true,
    message: "must hai bhai ho gya server deploy",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}...`);
});
