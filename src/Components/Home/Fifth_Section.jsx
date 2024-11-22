import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Fifth.css'
import Circle from '..//..//assets/d/circle.png'
import Mob from '..//..//assets/d/4-(1).png'

const Fifth_Section = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Duration of animation
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Animation happens only once
    });
  }, []);
  return (
    <>
        <div className='main-fifth'>
       <div className='fifth'>

       <div className="right-fifth-sec-item" >
            <h1>Experience Low-Cost Transfers in Any Global Currency</h1>
            <p>Send US dollars to SEA and ANZ regions, or any currency around the world with ease. Pay friends, family, or new connections on the go using your preferred global currency. With a stable digital US dollar backing each transaction, CASHLESSPAY minimizes currency fluctuations, providing reliable, affordable transfers wherever you are.</p>
         </div>

         <div className="left-fifth-sec-item">
            {/* <img src='https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/payments/IMPS.png' alt="" /> */}
            <img src={Circle} alt="" />
            <img src={Mob} alt="" data-aos="flip-right" />
         </div>
        
        </div>
       </div>
    </>
  )
}

export default Fifth_Section