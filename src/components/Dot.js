import React, { useState, useEffect, useRef } from 'react'
import { motion, useSpring } from 'framer-motion';

const BIG_SIZE = 55;
const SMALL_SIZE = 15;
const PER_PX = 0.3;


export default function Dot({ mousePos }) {
   const [color, setColor] = useState("#34D399")

   function changeColor() {
      // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
      const randomColor = Math.floor(Math.random() * 16777215);

      // Convert the random number to a hexadecimal string and pad it with zeros if needed
      const hexColor = randomColor.toString(16).padStart(6, '0');

      setColor(`#${hexColor}`);
   }

   const size = useSpring(SMALL_SIZE,
      { damping: 30, stiffness: 200 });

   const dotRef = useRef();

   useEffect(() => {
      if (!dotRef.current) return;
      const { x, y } = mousePos;
      const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

      const distance = Math.sqrt(
         Math.pow(Math.abs(x - dotX), 2) +
         Math.pow(Math.abs(y - dotY), 2)
      );

      size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
   }, [mousePos, size, color])

   return (
      <div ref={dotRef} onClick={() => changeColor()}>
         <motion.div
            className='motion'
            style={{ width: size, height: size, backgroundColor: `${color}` }} />
      </div>
   )
}
