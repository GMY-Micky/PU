import React, { useState, useEffect } from "react";
import "./css/gallery.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/gallery/").then((response) => {
        setImages(response.data);
      });
    }, 2000);
    return () => {
      setImages([]);
    };
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1>PUCIT GALLERY</h1>
      </div>
      <div className="gallery-items">
        {images.map((img, index) => {
          return (
            <div key={index} className="gallery-item">
              <Link to={`/gallery/${img._id}`}>
                <img src={img.image} alt={img.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
