import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Fifth.css'
import Circle from '..//..//assets/d/circle.png'
import Mob from '..//..//assets/d/4-(1).png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const Fifth_Section = () => {
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
        <div className='main-fifth'>
       <div className='fifth'>

       <div className="right-fifth-sec-item" >
            <h1>{t("fifth-line1")}</h1>
            <p>{t("fifth-line2")}</p>
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