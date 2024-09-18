import React, { useEffect, useState } from 'react';

const VideoFeed = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    setVideoSrc('http://192.168.1.20:5000/video_feed');
  }, []);

  return (
    <div>
      <h1>Video Feed</h1>
      <img src={videoSrc} alt="Video Stream" style={{ width: '100%', maxWidth: '600px' }} />
    </div>
  );
};

export default VideoFeed;
