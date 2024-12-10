import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/HomeFeatureThree.css'
import Card from '..//..//assets/c/card.png'
import Mobile from '..//..//assets/c/mobile.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const HomeFeatureThree = () => {
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
        <div className='feature-three'>
       <div className='feature-three-main'>
         <div className="feature-three-main-left">
         <div className="feature-three-main-imgee">
            <img src={Mobile} style={{position:"relative"}} alt="" />
            <img src={Card} alt="" data-aos="fade-right"/>
         </div>
         </div>
         <div className="feature-three-main-right">
            <h1>{t("sixth-line1")}</h1>
            <p>{t("sixth-line2")}</p>
         </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default HomeFeatureThree;