const express = require("express");
const cors = require("cors");
const ChatGpt = require("../FrontEnd/src/Components/CardData/ChatGpt.json");
const Midjourney = require("../FrontEnd/src/Components/CardData/Midjourney.json");
const DallE = require("../FrontEnd/src/Components/CardData/DallE.json");
const StableDiffusion = require("../FrontEnd/src/Components/CardData/StableDiffusion.json");
const Slides = require("../FrontEnd/src/Components/CardData/Slides.json");

const ChatGptPath = "../../FrontEnd/src/Components/CardData/ChatGpt.json";
const MidjourneyPath = "../../FrontEnd/src/Components/CardData/Midjourney.json";
const DallEPath = "../../FrontEnd/src/Components/CardData/DallE.json";
const StableDiffusionPath =
  "../../FrontEnd/src/Components/CardData/StableDiffusion.json";
const SlidesPath = require("../FrontEnd/src/Components/CardData/Slides.json");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/api/prompts/chatgpt", (req, res) => {
  res.json(ChatGpt);
});

app.get("/api/prompts/midjourney", (req, res) => {
  res.json(Midjourney);
});

app.get("/api/prompts/stablediffusion", (req, res) => {
  res.json(StableDiffusion);
});

app.get("/api/prompts/dalle", (req, res) => {
  res.json(DallE);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
