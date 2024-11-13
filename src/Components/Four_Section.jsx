import React from 'react'
import '../Css/Forth.css'
// import Img from '../assets/blaze videos/show-1.png'

const Four_Section = () => {
  return (
    <>
       <div className='main-forth'>
       <div className='forth'>
         <div className="left-four-sec-item">
            {/* <video   autoPlay muted loop playsInline src="https://blaze.money/videos/blaze-pay-search.mp4"></video> */}
            <img src='https://fedmobile.federalbank.co.in/wp-content/uploads/2020/08/UPI.png' alt="" />
         </div>
         <div className="right-four-sec-item">
            <h1>Use Blaze to send and request money with anyone</h1>
            <p>Send and request payments from anyone, even if they don't have a Blaze account. Whether you're splitting the bill, traveling, or supporting your family abroad, Blaze makes it easy to send and request payments with anyone in your contact list.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Four_Section