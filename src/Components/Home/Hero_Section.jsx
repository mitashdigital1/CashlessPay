import React from 'react'
import '../../Css/Home/Hero.css'




const Hero_Section = () => {
    return (
        <>
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
                        <span>Backed by <i>Y</i> Combinator</span>
                        <div className='main-heading'>
                            <h1 className='h11'>Instant, Secure </h1>
                            <h1> Cross-Border</h1>
                          
                            <h1 className='h1'>Payments</h1>
                        </div>
                        <div className='hide'>
                             <div className='hide-item'>
                             <h1>Instant, Secure Cross-Border</h1>
                             <h1 id='h1'>Payments</h1>
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