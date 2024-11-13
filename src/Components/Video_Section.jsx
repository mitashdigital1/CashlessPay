import React from 'react'
import '../Css/Video_Sec.css'

const Video_Section = () => {
  return (
    <>
       <div className='main-video'>
        <div className="video-bg">
        <div className='video-content'>
            <video autoPlay muted loop src='https://blaze.money/videos/blaze-giveaway.mp4' >
            </video>
           
        </div>
         <div className="text">
         <p>GET THE LINK</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Video_Section