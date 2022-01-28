const express = require("express");
const GalleryImageModel = require("../models/GallerySchema");
const app = express();

app.get("/", async (req, res) => {
  await GalleryImageModel.find({})
    .then((result) => res.send(result))
    .catch((err) => res.json(err));
});

app.get("/:id", async (req, res) => {
  await GalleryImageModel.findOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  const image = new GalleryImageModel({ image: req.body.image });
  try {
    await image.save();
    res.send("added to database");
  } catch (err) {
    console.log("err : ", err);
    res.json(err);
  }
});

module.exports = app;
