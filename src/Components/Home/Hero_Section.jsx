import React from 'react'
import '../../Css/Home/Hero.css'
import {useTypewriter} from 'react-simple-typewriter'

const Hero_Section = () => {
 const [text] = useTypewriter({
    words:['TRAVELLERS', 'FAMILIES', 'STUDENTS', 
        'FREELANCERS', 'ENTREPRENEURS', 'SMEs'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
 })
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
                            <button>DOWNLOAD APP</button>
                        </div>
                    </div>

                    <div className="hero-right-item">
                        {/* <video  autoPlay muted loop src={Video}>
                        </video> */}
                        <img src="https://spicemoney.com/_next/image?url=%2Fimages%2Fabout3.png&w=1920&q=75" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_Section