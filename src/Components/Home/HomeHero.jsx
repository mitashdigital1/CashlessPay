import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/HomeHero.css'
import {useTypewriter} from 'react-simple-typewriter'
import Orange from '..//..//assets/a/orange.png'
import Yellow from '..//..//assets/a/yellow.png'
import Lightgreen from '..//..//assets/a/light-green.png'
import Phone from '..//..//assets/a/phone.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'


const HomeHero = ({setShowlogin}) => {
    const{t,i18n} =useTranslation();
 const [text] = useTypewriter({
    words: [
        t("travellers"),   
        t("families"),      
        t("students"),      
        t("freelancers"),   
        t("entrepreneurs"), 
        t("smes")          
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
        <div className="contanier">
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
                        <div className='main-heading'>
                            <h1 >{t("line1")}  </h1>
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
                    <div className="hero-imgee">
    
                        <img src={Orange} alt="" />
                        <img src={Yellow} alt="" />
                        <img src={Phone} style={{position:"relative"}} alt="" data-aos="zoom-out-down" />
                        

                        
                    </div>
                    </div>
                </div>
            </div>
             </div>
        </>
    )
}

export default HomeHero;