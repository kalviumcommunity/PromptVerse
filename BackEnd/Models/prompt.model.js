const mongoose = require("mongoose");

const TextSchema = mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    imageAlt: String,
    promptName: { type: String, required: true },
    promptType: { type: String, required: true },
    promptDescription: { type: String, required: true },
    originalPrompt: { type: String, required: true },
    exampleOutput: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ImageSchema = mongoose.Schema({
  imageUrl: { type: String, required: true },
  imageAlt: String,
  promptName: { type: String, required: true },
  promptType: { type: String, required: true },
  promptDescription: { type: String, required: true },
  originalPrompt: { type: String, required: true },
  exampleOutput: String,
});

const ChatGptModel = mongoose.model("chatgpt", TextSchema);
const MidjourneyModel = mongoose.model("midjourney", ImageSchema);
const DallEModel = mongoose.model("dalle", ImageSchema);
const StableDiffusionModel = mongoose.model("stablediffusion", ImageSchema);

module.exports = {
  ChatGptModel,
  MidjourneyModel,
  DallEModel,
  StableDiffusionModel,
};
