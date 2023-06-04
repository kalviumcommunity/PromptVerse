const express = require("express");
const { StableDiffusionModel } = require("../Model/prompt.model");

const stablediffusion = express.Router();

stablediffusion.post("/", async (req, res) => {
  let payload = req.body;
  let postdata = new StableDiffusionModel(payload);
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
