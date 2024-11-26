import React from 'react'
import '../../Css/Business/B_Hero.css'
import flagsgif from "..//../assets/flags/flagsgif.gif"
import { Link } from 'react-router-dom';

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
            <Link to="/contact">
              <button>CONTACT US TO GET STARTED</button>
            </Link>
          </div>
          <div className='bg'>
            <div className='image'>
              <img src="https://images.unsplash.com/photo-1533908279087-2448f4554f18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
            </div>
          </div>
          <div className='last-heading' >
            <h2>SELL GLOBAL, ACCEPT LOCAL</h2>
            <p>Deliver seamless payment experiences with CashlessPay’s wallet and global payment solutions.
Accept CashlessPay</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default B_Hero