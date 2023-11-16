import React from 'react'

export default function Link() {
   return (
      <div className="split-screen">
         <div className="left-half">
            <div className="content">
               <h2>Welcome to Our Website</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio sed ipsum consectetur.</p>
            </div>
         </div>
         <div className="right-half">
            <img className="photo" src={'boy-link.jpg'} alt="" />
            <div className="button-container">
               <button className="action-button">Learn More</button>
            </div>
         </div>
      </div>
   )
}
