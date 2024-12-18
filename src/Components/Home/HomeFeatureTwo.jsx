import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/HomeFeatureTwo.css'
import Circle from '..//..//assets/d/circle.png'
import Mob from '..//..//assets/d/4-(1).png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const HomeFeatureTwo = () => {
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
    <><div className="contanier">
        <div className='feature-two'>
       <div className='feature-two-main'>

       <div className="feature-two-main-right" >
            <h1>{t("fifth-line1")}</h1>
            <p>{t("fifth-line2")}</p>
         </div>

         <div className="feature-two-main-left">
         <div className="feature-two-main-imgee">
            {/* <img src='https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/payments/IMPS.png' alt="" /> */}
            <img src={Circle} style={{position:"relative"}} alt="" />
            <img src={Mob} alt="" data-aos="flip-right" />
         </div>
         </div>
        
        </div>
       </div>
       </div>
    </>
  )
}

export default HomeFeatureTwo;