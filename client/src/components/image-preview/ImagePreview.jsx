import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./css/imagePreview.css";

const ImagePreview = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:3001/gallery/${id}`).then((response) => {
        setTitle(response.data.title);
        setImage(response.data.image);
      });
    }, 2000);
  }, []);

  return (
    <div className="image-preview">
      <div className="preview">
        <h1>{title}</h1>
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
