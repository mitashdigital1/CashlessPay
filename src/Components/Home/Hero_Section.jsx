import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../../Css/Home/Hero.css'
import {useTypewriter} from 'react-simple-typewriter'
import Orange from '..//..//assets/a/orange.png'
import Yellow from '..//..//assets/a/yellow.png'
import Lightgreen from '..//..//assets/a/light-green.png'
import Phone from '..//..//assets/a/phone.png'


const Hero_Section = ({setShowlogin}) => {
 const [text] = useTypewriter({
    words:['TRAVELLERS', 'FAMILIES', 'STUDENTS', 
        'FREELANCERS', 'ENTREPRENEURS', 'SMEs'],
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
                            <h1 className='h11'>Instant, Secure </h1>
                            <h1> Cross-Border</h1>
                            <h1>WALLET </h1>
                            <h1>EMPOWERING</h1>
                            <h1 className='h1'>{text}&nbsp;</h1>    
                        </div>
                        <div className='hide'>
                             <div className='hide-item'>
                             <h1>Instant, Secure Cross-Border WALLET 
                             EMPOWERING
                                  </h1>   
                             <h1 id='h1'>{text}&nbsp;</h1>
                             </div>
                            </div>
                        <div className="peragrph">
                            <p id='p'>Experience seamless international transactions with CASHLESSPAY – your gateway to fast, affordable, and secure money transfers for both individuals and businesses.
                            </p>
                            
                        </div>
                        <div className='btn-1'>
                            <button onClick={()=>setShowlogin(true)}>Get Started</button>
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