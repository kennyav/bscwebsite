import { Link } from 'react-router-dom';

export default function NavBar() {

   function handleClick(e) {
      e.preventDefault();
      const bars = document.querySelectorAll(".bar");
      bars.forEach((bar, i) => {
         bar.style.animationPlayState = "running";
      });
      const lastBar = bars[bars.length - 1];
      lastBar.addEventListener("animationend", () => {
         setTimeout(() => {
            window.location = e.target.href;
         }, 500)
      });
   }

   return (
      <nav>
         <div>
            {/* nav */}
            <ul>
               <li>
                  <Link to="/" onClick={(e) => handleClick(e)}>Home</Link>
               </li>
               <li>
                  <Link to="/about" onClick={(e) => handleClick(e)}>Our Work</Link>
               </li>
               <li>
                  <Link to="/process" onClick={(e) => handleClick(e)}>Our Process</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};