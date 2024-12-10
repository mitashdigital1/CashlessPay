import React from 'react'
import '../../Css/About/AboutTeam.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const AboutTeam= () => {
  const{t,i18n} =useTranslation();
  return (
    <div className='about-team'>
    <div className='about-team-main'>
        <div className='about-team-main-first-part'>
             <div className='about-team-main-first-part-handing'>
             <h2>{t("A-fifth-ln1")}</h2> 
             </div> 
             <div className='about-team-main-first-part-paragraph'>
                <h3>{t("A-fifth-ln2")}</h3>
                <p>{t("A-fifth-ln3")}</p>
                <h3>{t("A-fifth-ln4")}</h3>
                <p>{t("A-fifth-ln5")}</p>
                <p>{t("A-fifth-ln6")}</p>
             </div>              
        </div>
        <div className='about-team-main-second-part'>
            <img src="https://st4.depositphotos.com/5653638/41797/i/450/depositphotos_417978804-stock-photo-indian-family-father-mother-son.jpg" alt="" />
        </div>
    </div>
</div>
  )
}

export default AboutTeam