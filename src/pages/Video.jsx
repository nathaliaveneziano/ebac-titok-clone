import React, { useRef, useState } from 'react';
import BreckerVideo from '../assets/videos/brecker2.mp4';
import './Video.css';

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        ref={videoRef}
        loop
        onClick={handleStart}
        src={BreckerVideo}></video>
    </div>
  );
}

export default Video;
