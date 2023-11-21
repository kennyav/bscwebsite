import React from 'react'
import './style.css';
import { ArrowDownCircle, ArrowUpCircle } from 'react-ionicons'
import MultiLayerParallax from './MultiLayerParallax';

export default function Process() {
   return (
      <div>
         <div className="process-step" id={"design"}>
            <h1>Design</h1>
            <p> In-depth analysis of client requirements and objectives.
               Collaboration with clients to understand their vision and goals.
               Wireframing and prototyping to visualize the structure and layout.
               Incorporation of design principles and best practices.
               Iterative feedback loops with clients for refinement.
               Creation of a comprehensive design that aligns with the project's objectives.</p>
            <div className='arrow'>
               <a href='#implementation'>
                  <ArrowDownCircle
                     color={'white'}
                     height="30px"
                     width="30px"
                  />
               </a>
            </div>
         </div>
         <MultiLayerParallax imageFull={`url(/image-full-city.png)`} imageTop={`url(/image-top-city.png)`} height={200} title={""} />
         <div className="process-step" id={"implementation"}>
            <h1>Implementation</h1>
            <p>Proficient use of web development languages (HTML, CSS, JavaScript).
               Building user-friendly interfaces that prioritize usability.
               Integration of design elements into functional code.
               Development of responsive and scalable solutions.
               Continuous testing and debugging during the coding process.
               Adherence to coding standards and best practices.
               Collaboration with clients to ensure the implementation meets expectations.</p>
            <div className='arrow'>
               <a href='#user-testing'>
                  <ArrowDownCircle
                     color={'white'}
                     height="30px"
                     width="30px"
                  />
               </a>
            </div>
         </div>
         <MultiLayerParallax imageFull={`url(/image-full-desert.png)`} imageTop={`url(/image-top-desert2.png)`} height={200} title={""} />
         <div className="process-step" id={"user-testing"}>
            <div className='arrow'>
               <a href='#design'>
                  <ArrowUpCircle
                     color={'white'}
                     height="30px"
                     width="30px"
                  />
               </a>
            </div>
            <p>Comprehensive testing to identify potential issues and bugs.
               Inclusion of real users in the testing process.
               Evaluation of the user experience and interface functionality.
               Collection of feedback and observations from users.
               Iterative refinement based on user feedback.
               Focus on usability, accessibility, and overall user satisfaction.
               Final testing to ensure the software meets quality standards before deployment.</p>
            <h1>User Testing</h1>
         </div>
      </div>
   )
}
