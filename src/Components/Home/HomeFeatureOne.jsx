import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/HomeFeatureOne.css'

import one from '..//..//assets/b/1.png'
import two from '..//..//assets/b/2.png'
import three from '..//..//assets/b/raw.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const HomeFeatureOne = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Animation happens only once
      mirror: false,
    });
  }, []);
  return (
    <>
      <div className="contanier">
        <div className='feature-one'>
          <div className='feature-one-main'>
          
            <div className="feature-one-main-left">
              <div className="feature-one-imgee">
              <img src={three} style={{position:"relative"}} alt="" />
              <img src={one} alt="" data-aos="fade-right" />
              <img src={two} alt="" data-aos="fade-left" />
            </div>
          
        </div>
         
            <div className="feature-one-main-right">
              <h1>{t("four-line1")}</h1>
              <p>{t("four-line2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatureOne;