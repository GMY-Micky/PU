import React from 'react';
import "./css/header.css"
import TypeWriterEffect from 'react-typewriter-effect';


const Header = () => {
  return <div className='page-1'>
      <div className='header'>
      <div className='header-logo'>
        <div><img src="./assets/punjab-university-lahore-logo.png" alt="LOGO"/></div>
      </div>
      <div><ul className='list'>
          <li className='list-item'><a href='#'>HOME</a></li>
          <li className='list-item'><a href='#'>DERPARTMENTS</a></li>
          <li className='list-item'><a href='#'>FACULTY</a></li>
          <li className='list-item'><a href='#'>ACADEMICS</a></li>
          <li className='list-item'><a href='#'>ADMISSION</a></li>
          <li className='list-item'><a href='#'>STUDENT SOCIETIES</a></li>
          <li className='list-item'><a href='#'>ALUMNUS</a></li>
          <li className='list-item'><a href='#'>NOTICE BOARD</a></li>
          <li className='list-item'><a href='#'>FCIT OFFICES</a></li>
          <li className='list-item'><a href='#'>CONTACT US</a></li>
      </ul></div>
  </div>
  <div className='main-page-pic'>
  <div className="typewriter-text"><TypeWriterEffect
            textStyle={{ color:"white",fontSize:'3vmax' }}
            startDelay={10}
            cursorColor="white"
            text="FACULTY OF COMPUTING & INFORMATION TECHNOLOGY"
            typeSpeed={50}
            multiTextDelay={1000}
          /></div>
  </div>
  </div>;
};

export default Header;
