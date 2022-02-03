import React from "react";
import "./css/mainPagePic.css";
import TypeWriterEffect from "react-typewriter-effect";

const MainPagePic = () => {
  return (
    <div className="main-page-pic">
      <div className="typewriter-text">
        <TypeWriterEffect
          textStyle={{
            color: "white",
            fontSize: "4vmax",
            fontWeight: "600",
            textAlign: "center",
            textShadow: "0 0 5px black",
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
  );
};

export default MainPagePic;
