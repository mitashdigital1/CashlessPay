import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Forth.css'
// import Img from '../assets/blaze videos/show-1.png'
import one from '..//..//assets/b/1.png'
import two from '..//..//assets/b/2.png'
import three from '..//..//assets/b/raw.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const Four_Section = () => {
  const { t, i18n } = useTranslation();
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
        <div className='main-forth'>
          <div className='forth'>
          
            <div className="left-four-sec-item">
              <div className="four-imgee">
              {/* <video   autoPlay muted loop playsInline src="https://blaze.money/videos/blaze-pay-search.mp4"></video> */}
              {/* <img src='https://fedmobile.federalbank.co.in/wp-content/uploads/2020/08/UPI.png' alt="" /> */}
              <img src={three} style={{position:"relative"}} alt="" />
              <img src={one} alt="" data-aos="fade-right" />
              <img src={two} alt="" data-aos="fade-left" />
            </div>
          
        </div>
         
            <div className="right-four-sec-item">
              <h1>{t("four-line1")}</h1>
              <p>{t("four-line2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Four_Section