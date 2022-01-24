import React from 'react';
import "./header.css"

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
  </div>;
};

export default Header;