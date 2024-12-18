import React from 'react'
import '../../Css/About/AboutHero.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { useNavigate } from 'react-router-dom'
const AboutHero = () => {
  const{t,i18n} =useTranslation();
  const navigate = useNavigate();
  return (
    <div className='about-hero'>
      <div className='about-hero-main'>
        <div className='about-hero-main-item'>
          <h1>{t("A-f-ln1")}</h1>
          <p><span id='cashlesspay'>{t("A-f-ln2")}</span>{t("A-f-ln3")}</p>
          <div className='input-box'>
            <input type="email" placeholder={t("A-f-ln5")}/>
            <button onClick={()=>navigate("/contactus@cashlesspay.co")} >{t("A-f-ln4")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero