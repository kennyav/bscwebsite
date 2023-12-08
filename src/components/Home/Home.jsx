import React from 'react'
import './style.css'


export default function Home() {
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handler = (e) => {
  //     setMousePos({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener('mousemove', handler);

  //   return () => {
  //     window.removeEventListener('mousemove', handler)
  //   }
  // })

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
      {/* <MultiLayerParallax imageFull={`url(/image-full.png)`} imageTop={`url(/image-top.png)`} height={100} title={"Empowering Dreams, Crafting Solutions: Your Vision, Our Code."} font={'60px'} /> */}
      <div style={containerStyle}>
        <p className='title'>Empowering Dreams, Crafting Solutions: Your Vision, Our Code.</p>
        <div style={overlayStyle} />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9a995e53313911.592fd4ffb4745.gif"
          style={imgStyle}
          alt='Home Page Gif'
        ></img>
      </div>
      <div className='cta-buttons'>
        <button class="button-68">Get In Touch</button>
        <button class="button-68">Work</button>
        <button class="button-68">Agency</button>
      </div>
      {/* <h1 className='title'>BlockSmith Consulting, LLC</h1>
      <div className='dot-container'>
        {Array.from({ length: 240 }, (_, i) => (
          <Dot key={i} mousePos={mousePos}></Dot>
        ))}
      </div> */}
    </>
  )
}
