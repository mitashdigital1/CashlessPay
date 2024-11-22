import React from 'react'
import '../../Css/Getstarted/Getstart.css'
const Getstart = ({setShowlogin}) => {
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
           <h2>Get Started</h2>
           <h1 onClick={()=>setShowlogin(false)} >X</h1>
          </div>
          <div className="login-popup-content">
            <p>Please sign up for early access. We will send you a link to download our app once we are ready to lauch</p>
          </div>
          <div className="login-popup-inputs">
           <label htmlFor="email">Email</label>
            <input id='email' type="email" placeholder='Enert Email'  required/>
            <label htmlFor="mobile">Mobile</label>
            <input id='mobile' type="text" placeholder='Moblie No'  required/>
            <label htmlFor="country">Country</label>
            <input type="text" placeholder='Country' id='country' />
          </div>
          <div className='login-popup-btn'>
            <button>Get The Link</button>
          </div>
          <div className="login-popup-condition">
            <p>By signing up, you agree to CashlessPay 
            Early Access Terms of Use and Privacy Policy</p>
          </div>
          <span>sign in here</span>
        </form>
        
    </div>
  )
}

export default Getstart