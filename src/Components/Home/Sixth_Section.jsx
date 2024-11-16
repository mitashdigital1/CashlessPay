import React from 'react'
 
import '../../Css/Home/Sixth.css'

const Sixth_Section = () => {
  return (
    <>
        <div className='main-sixth'>
       <div className='sixth'>
         <div className="left-sixth-sec-item">
            {/* <video   autoPlay muted loop playsInline src={videoSixth}></video> */}
            <img src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/03/niyoequitas_card.webp?fit=792%2C1024&ssl=1" alt="" />
         </div>
         <div className="right-sixth-sec-item">
            <h1>Spend Instantly or Withdraw to Your Bank Account</h1>
            <p>Easily use your balance anywhere Visa is accepted worldwide. Pay with Apple Pay or Google Pay for quick, contactless purchases, or transfer funds from CASHLESSPAY directly to your bank account for easy access.</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Sixth_Section