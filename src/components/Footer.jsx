import React from 'react';
import "./footer.css"

const Footer = () => {
  return <div className='footer'>
      <div className="footer-links">
          <a href="https://www.facebook.com/Faculty.of.Computing.and.Information.Technology/"><i className="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/PUCITOffical"><i className="fab fa-twitter-square"></i></a>
          <a href="https://www.youtube.com/channel/UCilSxist3ZdErcPCPHbwIEw"><i className="fab fa-youtube-square"></i></a>
      </div>
      <div className="footer-text">
          <span className='copyright-text'>Copyright © 2019 PUCIT. All Rights Reserved.</span> 
      </div>
  </div>;
};

export default Footer;
