import React from "react";
import "./css/mediaBox.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const MediaBox = () => {
  return (
    <div className="media-box">
      <div className="twitter-widget">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PUCITOfficial"
          options={{ height: 400, width: 400 }}
        />
      </div>
      <div className="facebook-widget">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFaculty.of.Computing.and.Information.Technology%2F&tabs=timeline&width=400&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="400"
          height="400"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          title="Facebook Widget"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="youtube-video">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/EkMbHkemjus"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default MediaBox;
