import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Sixth.css'
import Card from '..//..//assets/c/card.png'
import Mobile from '..//..//assets/c/mobile.png'

const Sixth_Section = () => {
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
        <div className='main-sixth'>
       <div className='sixth'>
         <div className="left-sixth-sec-item">
            {/* <video   autoPlay muted loop playsInline src={videoSixth}></video> */}
            {/* <img src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/03/niyoequitas_card.webp?fit=792%2C1024&ssl=1" alt="" /> */}
            <img src={Mobile} alt="" />
            <img src={Card} alt="" data-aos="fade-right"/>
         </div>
         <div className="right-sixth-sec-item">
            <h1>Spend Instantly or Withdraw to Your Bank Account</h1>
            <p>Easily use your balance anywhere Visa is accepted worldwide. Pay with Apple Pay or Google Pay for quick, contactless purchases, or transfer funds from CASHLESSPAY directly to your bank account for easy access.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Sixth_Section