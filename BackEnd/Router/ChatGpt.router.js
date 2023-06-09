const express = require("express");
const { ChatGptModel } = require("../Model/prompt.model");

const chatgpt = express.Router();

chatgpt.post("/", async (req, res) => {
  let payload = req.body;
  let postdata = new ChatGptModel(payload);
  await postdata.save();

  res.status(200).json({
    status: "success",
    body: "A new prompt has been added successfully",
  });
});

chatgpt.get("/", async (req, res) => {
  const data = await ChatGptModel.find();
  res.send(data);
});

module.exports = chatgpt;
