import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Sixth.css'
import Card from '..//..//assets/c/card.png'
import Mobile from '..//..//assets/c/mobile.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const Sixth_Section = () => {
  const{t,i18n} =useTranslation();
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
    <div className="contanier">
        <div className='main-sixth'>
       <div className='sixth'>
         <div className="left-sixth-sec-item">
         <div className="sixth-imgee">
            {/* <video   autoPlay muted loop playsInline src={videoSixth}></video> */}
            {/* <img src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/03/niyoequitas_card.webp?fit=792%2C1024&ssl=1" alt="" /> */}
            <img src={Mobile} style={{position:"relative"}} alt="" />
            <img src={Card} alt="" data-aos="fade-right"/>
         </div>
         </div>
         <div className="right-sixth-sec-item">
            <h1>{t("sixth-line1")}</h1>
            <p>{t("sixth-line2")}</p>
         </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default Sixth_Section