import React from 'react'
import './style.css'


export default function Examples() {
   return (
      <div className='exampleContainer'>
         <div className='stepsContainer'>
            <img className='exampleImage' src='./drawing.jpeg' alt='Example 1' />
         </div>
         <div className='stepsContainer'>
            <img className='exampleImage' src='./drawing.jpeg' alt='Example 2' />
         </div>
         <div className='stepsContainer'>
            <img className='exampleImage' src='./drawing.jpeg' alt='Example 3' />
         </div>
         <div className='stepsContainer'>
            <img className='exampleImage' src='./drawing.jpeg' alt='Example 4' />
         </div>
         <div className='stepsContainer'>
            <img className='exampleImage' src='./drawing.jpeg' alt='Example 5' />
         </div>
      </div>
   )
}
