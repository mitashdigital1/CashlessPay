import React from 'react'
import '../Css/Hero.css'
import Video  from '../assets/blaze videos/video.mp4'
 
 

const Hero_Section = () => {
    return (
        <>
            <div className='main'>
                <div className='hero-sec'>
                    <div className="hero-left-item">
                        <span>Backed by <i>Y</i> Combinator</span>
                        <h1>PAY ANYONE  ANYWHERE  <br /><i>   INSTANTLY  </i></h1>
                        <div className="peragrph">
                        <p id='p'>Blaze is the world's first payments app for modern nomads.</p>
                        <p> Pay anyone for nearly free, across multiple currencies. It's fast, fun and easy.</p>
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