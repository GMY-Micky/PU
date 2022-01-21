import React from 'react';

const Header = () => {
  return <div className='header'>
      <ul className='left-list'>
          <li className='left-list-item'><a href='#'>HOME</a></li>
          <li className='left-list-item'><a href='#'>DERPARTMENTS</a></li>
          <li className='left-list-item'><a href='#'>FACULTY</a></li>
          <li className='left-list-item'><a href='#'>ACADEMICS</a></li>
          <li className='left-list-item'><a href='#'>ADMISSION</a></li>
      </ul>
      <div className='header-logo'>
        <img src="./assets/punjab-university-lahore-logo.png" alt="LOGO" />
        <h3 className='uni-name'>Faculty of Computing & Information Technology</h3>
      </div>
      <ul className='right-list'>
          <li className='right-list-item'><a href='#'>STUDENT SOCIETIES</a></li>
          <li className='right-list-item'><a href='#'>ALUMNUS</a></li>
          <li className='right-list-item'><a href='#'>NOTICE BOARD</a></li>
          <li className='right-list-item'><a href='#'>FCIT OFFICES</a></li>
          <li className='right-list-item'><a href='#'>CONTACT US</a></li>
      </ul>
  </div>;
};

export default Header;
