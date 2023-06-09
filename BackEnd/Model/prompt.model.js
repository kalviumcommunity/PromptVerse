const mongoose = require("mongoose");

const TextSchema = mongoose.Schema(
  {
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

const ImageSchema = mongoose.Schema(
  {
    promptName: { type: String, required: true },
    promptType: { type: String, required: true },
    promptDescription: { type: String, required: true },
    originalPrompt: { type: String, required: true },
    exampleOutput: { type: [String], required: true },
  },
  {
    versionKey: false,
  }
);

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
