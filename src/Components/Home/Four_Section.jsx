import React, { useEffect } from 'react'
import AOS  from 'aos'
import 'aos/dist/aos.css'
import '../../Css/Home/Forth.css'
// import Img from '../assets/blaze videos/show-1.png'

const Four_Section = () => {
   useEffect(()=> {
      AOS.init({ duration: 3000});
   },[]
   );
  return (
    <>
       <div className='main-forth'>
       <div className='forth'>
         <div className="left-four-sec-item" data-aos="zoom-out-right">
            {/* <video   autoPlay muted loop playsInline src="https://blaze.money/videos/blaze-pay-search.mp4"></video> */}
            <img src='https://fedmobile.federalbank.co.in/wp-content/uploads/2020/08/UPI.png' alt="" />
         </div>
         <div className="right-four-sec-item">
            <h1>Send and Request Money Easily with CASHLESSPAY</h1>
            <p>With CASHLESSPAY, sending and requesting money is a breeze—no account required for the other person. Whether you’re splitting a dinner bill, covering travel costs, or supporting family overseas, CASHLESSPAY lets you connect with anyone on your contact list for quick, secure payments that simplify your life.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Four_Section