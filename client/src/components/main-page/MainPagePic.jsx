import React from "react";
import "./css/mainPagePic.css";
import TypeWriterEffect from "react-typewriter-effect";

const MainPagePic = () => {
  return (
    <>
      <div className="main-page-pic" id="1">
        <div className="typewriter-text">
          <TypeWriterEffect
            textStyle={{
              color: "rgba(47, 157, 255, 1)",
              fontSize: "4vmax",
              fontWeight: "900",
              textAlign: "center",
            }}
            startDelay={10}
            cursorColor="rgba(47, 157, 198, 1)"
            text="FACULTY OF COMPUTING & INFORMATION TECHNOLOGY"
            typeSpeed={50}
          />
        </div>
        <div className="main-video">
          <video
            src="./PU.mp4"
            width="100%"
            height="100%"
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
          />
        </div>
      </div>
    </>
  );
};

export default MainPagePic;