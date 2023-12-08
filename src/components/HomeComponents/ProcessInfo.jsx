import React from 'react'
import './style.css'

export default function ProcessInfo() {
   return (
      <div className='processContainer'>
         <div className='processWords'>
            <div className='processTitle'>
               The Process
            </div>
            <h2>
               We will keep it simple with our three step process.
               <p class="highlight">Design.</p>
               <p class="highlight">Implementation.</p>
               <p class="highlight">User Testing.</p>
            </h2>
            <p>Ensuring we are aligned at each step.</p>
         </div>
         <div className='processImage'>
            <img
               src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b67a4d53313911.592fd4ffb2930.gif'
               alt='Process'
            />

         </div>
      </div>
   )
}
