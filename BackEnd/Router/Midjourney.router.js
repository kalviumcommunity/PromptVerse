const express = require("express");
const { MidjourneyModel } = require("../Model/prompt.model");
const multer = require("multer");
const FormData = require("form-data");
const upload = multer({ storage: multer.memoryStorage() });
const axios = require("axios");

const midjourney = express.Router();

midjourney.post("/", upload.single("exampleOutput"), async (req, res) => {
  const formData = new FormData();
  formData.append("key", process.env.API_KEY);
  formData.append("image", req.file.buffer.toString("base64"));

  const response = await axios.post(
    "https://api.imgbb.com/1/upload",
    formData,
    {
      headers: formData.getHeaders(),
    }
  );

  const ImageUrl = response.data.data.url;
  let postdata = new MidjourneyModel({
    promptName: req.body.promptName,
    promptType: req.body.promptType,
    promptDescription: req.body.promptDescription,
    originalPrompt: req.body.originalPrompt,
    exampleOutput: ImageUrl,
  });

  console.log(postdata);

  await postdata.save();

  res.status(200).json({
    status: "success",
    body: "A new prompt has been added successfully",
  });
});

midjourney.get("/", async (req, res) => {
  const data = await MidjourneyModel.find();
  res.send(data);
});

module.exports = midjourney;
