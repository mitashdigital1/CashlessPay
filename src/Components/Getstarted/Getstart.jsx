import React from 'react'
import '../../Css/Getstarted/Getstart.css'

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Getstart = ({setShowlogin}) => {
  const [selected, setSelected] = useState("");
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
            <ReactFlagsSelect 
            selected={selected}
            onSelect={(code) => setSelected(code)}
            placeholder ="Select Country"
                className='menu-flag'
                selectButtonClassName="menu-flags-button"
                searchable
                searchPlaceholder="Search countries"
             />
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