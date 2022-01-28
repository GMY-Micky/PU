const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

const GalleryImageModel = mongoose.model("galleryImage", gallerySchema);
module.exports = GalleryImageModel;
