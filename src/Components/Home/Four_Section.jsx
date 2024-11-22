import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Forth.css'
// import Img from '../assets/blaze videos/show-1.png'
import one from '..//..//assets/b/1.png'
import two from '..//..//assets/b/2.png'
import three from '..//..//assets/b/raw.png'

const Four_Section = () => {
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
       <div className='main-forth'>
       <div className='forth'>
         <div className="left-four-sec-item">
            {/* <video   autoPlay muted loop playsInline src="https://blaze.money/videos/blaze-pay-search.mp4"></video> */}
            {/* <img src='https://fedmobile.federalbank.co.in/wp-content/uploads/2020/08/UPI.png' alt="" /> */}
            <img src={three} alt="" />
            <img src={one} alt="" data-aos="fade-right" />
            <img src={two} alt="" data-aos="fade-left"/>
         </div>
         <div className="right-four-sec-item">
            <h1>Send and Request Money Easily with CASHLESSPAY</h1>
            <p>With CASHLESSPAY, sending and requesting money is a breeze—no account required for the other person. Whether you’re splitting a dinner bill, covering travel costs, or supporting family overseas, CASHLESSPAY lets you connect with anyone on your contact list for quick, secure payments that simplify your life.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Four_Section