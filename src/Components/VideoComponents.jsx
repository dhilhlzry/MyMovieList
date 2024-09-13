import React from "react";

const YouTubeVideo = ({ videoId }) => {
  
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe className="video-play" src={url} allowFullScreen title="YouTube Video" />
    </div>
  );
};

export default YouTubeVideo;
