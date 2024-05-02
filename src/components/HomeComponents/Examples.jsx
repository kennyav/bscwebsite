import React from 'react'
import './style.css'


export default function Examples() {
   return (
      <>
         <div className='exampleHeader'>
            <span>Design Breakdown</span>
            <span>Here is a breakdown of our design process, from ideation sketches to polished design ready for implementation. </span>
         </div>
         <div className='exampleContainer'>
            <div className='stepsContainer'>
               <span>Drawing</span>
               <img className='exampleImage' src='./drawing.jpeg' alt='Example 1' />
            </div>
            <div className='stepsContainer'>
               <span>Wireframing</span>
               <img className='exampleImage' src='./wireframe.png' alt='Example 2' />
            </div>
            <div className='stepsContainer'>
               <span>LoFi</span>
               <img className='exampleImage' src='./lofi.png' alt='Example 3' />
            </div>
            <div className='stepsContainer'>
               <span>Prototyping</span>
               <img className='exampleImage' src='./drawing.jpeg' alt='Example 4' />
            </div>
            <div className='stepsContainer'>
               <span>High Fidelity</span>
               <img className='exampleImage' src='./drawing.jpeg' alt='Example 5' />
            </div>
         </div>
      </>
   )
}
