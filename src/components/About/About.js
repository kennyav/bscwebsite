import React, { useEffect } from 'react'
import './style.css'

export default function About() {

   

   useEffect(() => {
      const slider = document.querySelector('.slider');
      function activate(e) {
         const items = document.querySelectorAll('.item');
         e.target.matches('.nxt') && slider.append(items[0]);
         e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
      }

      document.addEventListener('click', activate, false);

      return () => {
         document.removeEventListener('click', activate, false);
      };
   }, []);

   

   return (
      <div className='body'>
         <div className='main'>
            <ul className='slider'>
               <li className='item' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1699019950419-ffe12ae956c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                  <div className='content'>
                     <h2>Trademarktopia</h2>
                     <p className='description'>Trademarktopia is an innovative trademark solution leveraging the T3 web stack to streamline and modernize the trademark filing process, eliminating the need for physical meetings. Notably, it significantly boosts user trademark filings by 50%, enhances attorney efficiency with automated intake forms, and provides freelance attorneys with a potential annual revenue increase of $400,000 by optimizing client consultations.</p>
                     <button><a href="https://trademarktopia.tmtopia.com/">Learn More</a></button>
                  </div>
               </li>
               <li className='item' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1699470397862-f2bb74659a09?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                  <div className='content'>
                     <h2>Artificial Intelligence Trust Council</h2>
                     <p className='description'>We spearheaded the development and implementation of comprehensive product strategies, leading to the successful beta launch of the Nostr Client product within an impressive three-month timeframe. Managing cross-functional teams, we ensured seamless delivery, created compelling product images, and implemented innovative design approaches, establishing Nostr Client as a reliable and user-friendly solution, driving companies' growth and success. ** AITC SITE PASSWORD **: AITC_Y2023_Test_Password</p>
                     <button><a href="https://aitc.vercel.app/section/login">Learn More</a></button>
                  </div>
               </li>
               <li className='item' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682695795798-1b31ea040caf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                  <div className='content'>
                     <h2>FlorkOfCows</h2>
                     <p className='description'>We enhanced the FlorkofCows website, optimizing usability, and facilitating improved communication between users and artists for licensing purposes. The update also streamlined the emailing process for forms, ensuring efficient and seamless interactions.</p>
                     <button><a href="https://www.florkofcows.com/">Learn More</a></button>
                  </div>
               </li>
               <li className='item' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1699883815067-e48996c32217?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                  <div className='content'>
                     <h2>BlockSmith Consulting, LLC</h2>
                     <p className='description'></p>
                     <button>Learn More</button>
                  </div>
               </li>
            </ul>
            <nav className='nav'>
               <div className='btn prev'/>
               <div className='btn nxt'/>
            </nav>
         </div>
      </div >
   )
}
