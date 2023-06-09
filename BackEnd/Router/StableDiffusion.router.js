const express = require("express");
const { StableDiffusionModel } = require("../Model/prompt.model");
const multer = require("multer");
const FormData = require("form-data");
const upload = multer({ storage: multer.memoryStorage() });
const axios = require("axios");

const stablediffusion = express.Router();

stablediffusion.post("/", upload.single("exampleOutput"), async (req, res) => {
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
  let postdata = new StableDiffusionModel({
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

stablediffusion.get("/", async (req, res) => {
  const data = await StableDiffusionModel.find();
  res.send(data);
});

module.exports = stablediffusion;
