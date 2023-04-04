import React, { useEffect, useState } from 'react';
import Video from './pages/Video';
import './App.css';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import logo from './logo.png';
import logo2 from './logo2.png';

function App() {
  let maxHeight;

  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, 'videos');
    const videosSnapchot = await getDocs(videosCollection);
    const videosList = videosSnapchot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='App' style={{ maxHeight: maxHeight + 'px' }}>
      <img src={logo2} alt='Logo do TikTok' className='logo' />
      <div className='app__videos'>
        <img src={logo} alt='Logo do TikTok' className='app__logo' />
        {videos.map((video) => {
          return (
            <Video
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
              name={video.name}
              description={video.description}
              music={video.music}
              url={video.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
