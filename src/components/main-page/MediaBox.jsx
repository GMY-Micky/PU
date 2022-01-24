import React from 'react';
import "./css/mediaBox.css"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import YouTube from "react-youtube"

const MediaBox = () => {

  const opts = {
    height: '400',
    width: '400',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videoOnReady=(e)=> {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }

  return <div className='media-box'>
<div className="twitter-widget">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="PUCITOfficial"
  options={{height: 400,width:400}}
/>
</div>
<div className="facebook-widget">
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFaculty.of.Computing.and.Information.Technology%2F&tabs=timeline&width=600&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="400" height="400" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> 
</div>
<div className="youtube-video">
<YouTube videoId="EkMbHkemjus" opts={opts} onReady={(e)=>videoOnReady(e)} />
</div>
    </div>;
};

export default MediaBox;
