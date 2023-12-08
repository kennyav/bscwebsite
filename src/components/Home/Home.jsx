import React from 'react'
import './style.css'

// components
import MissionStatement from '../HomeComponents/MissionStatement';
import ProcessInfo from '../HomeComponents/ProcessInfo';

export default function Home() {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Adjust the last value for opacity (0 is fully transparent, 1 is fully opaque)
    zIndex: 1,
  }

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <div style={containerStyle}>
        <p className='title'>Empowering Dreams, Crafting Solutions: Your Vision, Our Code.</p>
        <div className='cta-buttons'>
          <button class="button-68">Get In Touch</button>
          <button class="button-69">Work</button>
          <button class="button-69">Agency</button>
        </div>
        <div style={overlayStyle} />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9a995e53313911.592fd4ffb4745.gif"
          style={imgStyle}
          alt='Home Page Gif'
        ></img>
      </div>
      <MissionStatement />
      <ProcessInfo />
    </>
  )
}
