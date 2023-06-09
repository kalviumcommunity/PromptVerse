require("dotenv").config();
const express = require("express");
const cors = require("cors");

const ChatGpt = require("./Router/ChatGpt.router");
const Midjourney = require("./Router/Midjourney.router");
const DallE = require("./Router/DallE.router");
const StableDiffusion = require("./Router/StableDiffusion.router");
const connection = require("./Config/db");

const app = express();
const port = process.env.port;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/chatgpt", ChatGpt);
app.use("/api/midjourney", Midjourney);
app.use("/api/dalle", DallE);
app.use("/api/stablediffusion", StableDiffusion);

app.listen(port, async () => {
  try {
    await connection();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
