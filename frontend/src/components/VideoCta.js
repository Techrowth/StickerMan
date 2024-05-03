import React, { useState } from 'react';
import VideoImg from '../assets/img/other/video.png';

export default function VideoCta() {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className='video-section my-5'>
      <div className='container d-flex justify-content-center'>
        <div className='col-lg-11 col-md-12 col-12'>
          {!showVideo ? (
            <img src={VideoImg} className='img-fluid' alt='Video Thumbnail' onClick={handleClick} style={{ cursor: 'pointer' }} />
          ) : (
            <iframe
              className='home-video-sec'
              width="100%"
              style={{ borderRadius: '12px' }}
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=C_0EL_4Fgl0b_Mt2" // Replace VIDEO_ID_HERE with the actual ID of your YouTube video
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
