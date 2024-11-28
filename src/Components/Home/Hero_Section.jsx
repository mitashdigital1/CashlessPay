import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Hero.css'
import {useTypewriter} from 'react-simple-typewriter'
import Orange from '..//..//assets/a/orange.png'
import Yellow from '..//..//assets/a/yellow.png'
import Lightgreen from '..//..//assets/a/light-green.png'
import Phone from '..//..//assets/a/phone.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'


const Hero_Section = ({setShowlogin}) => {
    const{t,i18n} =useTranslation();
 const [text] = useTypewriter({
    words: [
        t("travellers"),   // This will translate to the "travellers" key in your i18n JSON
        t("families"),      // This will translate to the "families" key
        t("students"),      // This will translate to the "students" key
        t("freelancers"),   // This will translate to the "freelancers" key
        t("entrepreneurs"), // This will translate to the "entrepreneurs" key
        t("smes")          // This will translate to the "smes" key
      ],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
 })
 useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Animation happens only once
    });
  }, []);
    return (
        <>
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
                        <div className='main-heading'>
                            <h1 className='h11'>{t("line1")}  </h1>
                            <h1>{t("line2")}</h1>
                            <h1>{t("line3")}</h1>
                            <h1>{t("line4")}</h1>
                            <h1 className='h1'>{text}&nbsp;</h1>    
                        </div>
                        <div className='hide'>
                             <div className='hide-item'>
                             <h1>{t("heading-1")}
                                  </h1>   
                             <h1 id='h1'>{text}&nbsp;</h1>
                             </div>
                            </div>
                        <div className="peragrph">
                            <p id='p'>{t("description")}
                            </p>
                            
                        </div>
                        <div className='btn-1'>
                            <button onClick={()=>setShowlogin(true)}>{t("button_text")}</button>
                        </div>
                    </div>

                    <div className="hero-right-item">
                        {/* <video  autoPlay muted loop src={Video}>
                        </video> */}
                        
                        {/* <img src="https://spicemoney.com/_next/image?url=%2Fimages%2Fabout3.png&w=1920&q=75" alt="" /> */}
                        <img src={Orange} alt="" />
                        <img src={Yellow} alt="" />
                        <img src={Phone} alt="" data-aos="zoom-out-down" />

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_Section