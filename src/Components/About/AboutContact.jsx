import React from 'react'
import '../../Css/About/AboutContact.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { useNavigate } from 'react-router-dom'
const AboutContact = () => {
  const{t,i18n} =useTranslation();
  const navigate = useNavigate();
  return (
    <div className='about-contact'>
        <div className='about-contact-main'>
            <div className='about-contact-main-item'>
            <h1>{t("A-eight-ln1")}</h1>
                <p>{t("A-eight-ln2")}</p>
                <button onClick={()=>navigate("/careers")} >{t("A-eight-ln3")}</button>
            </div>
        </div>
    </div>
  )
}

export default AboutContact