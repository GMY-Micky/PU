import React, { useState, useEffect } from "react";
import "./css/gallery.css";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/gallery/").then((response) => {
        setImages(response.data);
      });
    }, 2000);
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1>PUCIT GALLERY</h1>
      </div>
      <div className="gallery-items">
        {images.map((img, index) => {
          return <img src={img.image} alt={img.title} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
