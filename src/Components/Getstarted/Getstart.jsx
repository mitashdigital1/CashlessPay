import React from 'react'
import '../../Css/Getstarted/Getstart.css'

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const Getstart = ({setShowlogin}) => {
  const [selected, setSelected] = useState("");
  const{t,i18n} =useTranslation();
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
           <h2>{t("G-ln1")}</h2>
           <h1 onClick={()=>setShowlogin(false)} >X</h1>
          </div>
          <div className="login-popup-content">
            <p>{t("G-ln2")}</p>
          </div>
          <div className="login-popup-inputs">
           <label htmlFor="email">{t("G-ln3")}</label>
            <input id='email' type="email" placeholder={t("G-ln4")} required/>
            <label htmlFor="mobile">{t("G-ln5")}</label>
            <input id='mobile' type="text" placeholder={t("G-ln6")}  required/>
            <label htmlFor="country">{t("G-ln7")}</label>
        

      <ReactFlagsSelect
        selected={"NZ"}
        onSelect={(code) => setSelected(code)}
        searchable
        searchPlaceholder="Search countries"
        className="custom-flag-select"
        selectButtonClassName="menu-flags-button"
        alignOptionsToLeft
        
        countries={["NZ", "ID", "TH", "VN", "MY", "PH","SG","MM","KH","AU"]}
      />
    
        
            </div>
          <div className='login-popup-btn'>
            <button>{t("G-ln8")}</button>
          </div>
          <div className="login-popup-condition">
            <p>{t("G-ln9")}</p>
          </div>
          <span style={{marginTop:"-15px"}}>{t("G-ln10")}</span>
        </form>
        
    </div>
  )
}

export default Getstart