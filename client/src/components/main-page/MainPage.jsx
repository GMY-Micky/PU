import React from 'react';
import Departments from "./Departments"
import TextContent from './TextContent';
import MediaBox from './MediaBox';
import Gallery from './Gallery';
import MainPagePic from './MainPagePic';

const MainPage = () => {
  return <>
    <MainPagePic />
    <Departments />
    <TextContent />
    <MediaBox />
    <Gallery />
  </>;
};

export default MainPage;
