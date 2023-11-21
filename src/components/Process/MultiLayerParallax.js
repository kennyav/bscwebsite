import React, { useRef } from 'react'
import './style.css'
import { motion, useScroll, useTransform } from 'framer-motion';


export default function MultiLayerParallax(props) {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0,1], ['0%', '200%']);

  return (
    <div ref={ref} className='parallax-container'  style={{ height: `${props.height}vh` }}>
      <motion.h1 
        style={{y: textY}}
        className='parallax-text'>{props.title}</motion.h1>
      <motion.div
        className='parallax-image-full'
        style={{
          backgroundImage: props.imageFull,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }} />
      <div
        className='parallax-image-bottom'
        style={{
          backgroundImage: props.imageTop,
          backgroundPosition: "bottom",
          backgroundSize: "cover"
        }} />
    </div>
  )
}
