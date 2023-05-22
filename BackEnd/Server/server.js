const express = require("express");
const ChatGpt = require("../../FrontEnd/src/Components/CardData/ChatGpt.json");
const Midjourney = require("../../FrontEnd/src/Components/CardData/Midjourney.json");
const DallE = require("../../FrontEnd/src/Components/CardData/DallE.json");
const StableDiffusion = require("../../FrontEnd/src/Components/CardData/StableDiffusion.json");

const ChatGptPath = "../../FrontEnd/src/Components/CardData/ChatGpt.json";
const MidjourneyPath = "../../FrontEnd/src/Components/CardData/Midjourney.json";
const DallEPath = "../../FrontEnd/src/Components/CardData/DallE.json";
const StableDiffusionPath =
  "../../FrontEnd/src/Components/CardData/StableDiffusion.json";

const app = express();
const port = 4002;
app.use(express.json());

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

app.get("/api/prompt/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const prompt = await Prompt.findById(id);

    if (!prompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }

    res.json({ prompt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
