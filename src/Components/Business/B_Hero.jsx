import React from 'react'
import '../../Css/Business/B_Hero.css'
import flagsgif from "..//../assets/flags/flagsgif.gif"

const B_Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='main-hero'>
              <div className='top-box'>
               <div className='main-handing'>
               <h1>
                Sell&nbsp;
                <span className="image-container">
                 <img src={flagsgif} alt="" />
                </span>
                &nbsp;Globally
                <br></br>
                Accept &nbsp; Locally
                </h1>
               {/* <h1>from your global customers</h1> */}
               </div>
                <div className='second-handing'>
                <p>Provide smooth, localized payment experiences with CASHLESSPAY’s wallet and global payment solutions. </p>
                {/* <p> </p> */}
                </div>
              <button>CONTACT US TO GET STARTED</button>
              </div>
            <div className='bg'>
            <div className='image'>
                <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='img-handing'>
                  <h1>Manage your business finances</h1>
                  <p>with Cashlesspay Dashboard</p>
                </div>
               </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default B_Hero