const express = require("express");
const { DallEModel } = require("../Model/prompt.model");

const dalle = express.Router();

dalle.post("/", async (req, res) => {
  let payload = req.body;
  let postdata = new DallEModel(payload);
  await postdata.save();

  res.status(200).json({
    status: "success",
    body: "A new prompt has been added successfully",
  });
});

dalle.get("/", async (req, res) => {
  const data = await DallEModel.find();
  res.send(data);
});

module.exports = dalle;
