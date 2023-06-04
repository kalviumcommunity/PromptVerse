const express = require("express");
const { MidjourneyModel } = require("../Model/prompt.model");

const midjourney = express.Router();

midjourney.post("/", async (req, res) => {
  let payload = req.body;
  let postdata = new MidjourneyModel(payload);
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
