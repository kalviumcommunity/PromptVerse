const express = require("express");

const app = express();
const port = 4002;

app.get("/", (req, res) => {
  res.json("Hello, World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
