import React, { useState, useEffect } from 'react'
import MultiLayerParallax from "./Process/MultiLayerParallax"

// components
import Dot from './Dot'


export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handler);

    return () => {
      window.removeEventListener('mousemove', handler)
    }
  })

  return (
    <>
      <MultiLayerParallax />
      {/* <h1 className='title'>BlockSmith Consulting, LLC</h1>
      <div className='dot-container'>
        {Array.from({ length: 240 }, (_, i) => (
          <Dot key={i} mousePos={mousePos}></Dot>
        ))}
      </div> */}
    </>
  )
}
