import React from 'react';
import { Link } from 'react-scroll';
function HeroSection() {
  return (
    <section className='hero'>
         <img src="/restaurant.jpg" alt="restaurant" />
           <div className='item'>
              <h3>Dream maker </h3>
                  <div>
                      <h1>Your personal Dream maker </h1>
                       <p>
                        we believe that it is all about the BIG DREAMS and the small details ! 
                       </p>
                       <Link to='contact' spy={true} smooth={true} duration={500}>
                          BOOK NOW 
                       
                       </Link>




                  </div>





           </div>








    </section>
    
  );
}; 

export default HeroSection;
