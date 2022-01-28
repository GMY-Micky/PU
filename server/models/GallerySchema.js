const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const GalleryImageModel = mongoose.model("galleryImage", gallerySchema);
module.exports = GalleryImageModel;
