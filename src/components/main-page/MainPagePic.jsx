import React from 'react';
import "./css/mainPagePic.css"
import TypeWriterEffect from 'react-typewriter-effect';

const MainPagePic = () => {
  return <div className='main-page-pic'>
  <div className="typewriter-text"><TypeWriterEffect
            textStyle={{ color:"white",fontSize:'2.7vmax',fontWeight:'900' }}
            startDelay={10}
            cursorColor="white"
            text="FACULTY OF COMPUTING & INFORMATION TECHNOLOGY"
            typeSpeed={50}
          /></div>
  </div>;
};

export default MainPagePic;
