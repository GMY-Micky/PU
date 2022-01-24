import React from 'react';
import "./css/gallery.css"

const Gallery = () => {
  return <div className='gallery'>
      <div className="gallery-title">
      <h1>PUCIT GALLERY</h1>
      </div>
      <div className="gallery-items"><img src="./assets/pu-cad.jpg" alt="PU-CAD" />
      <img src="./assets/main.jpg" alt="IT department" />
      <img src="./assets/new-campus-fcit.jpg" alt="FCIT new Campus" />
      <img src="./assets/lab.jpg" alt="Lab" />
      <img src="./assets/new-campus-fcit-2.jpg" alt="FCIT new Campus" />
      <img src="./assets/fcit-new-campus-building.jpg" alt="FCIT new Campus building" /></div>
  </div>;
};

export default Gallery;
