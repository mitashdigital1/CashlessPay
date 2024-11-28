import React from 'react'
import '../../Css/About/A_Fifth.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const A_Fifth = () => {
  const{t,i18n} =useTranslation();
  return (
    <div className='a-fifth'>
    <div className='a-main-fifth'>
        <div className='a-first-fifth-part'>
             <div className='a-first-fifth-handing'>
             <h2>{t("A-fifth-ln1")}</h2> 
             </div> 
             <div className='a-first-fifth-paragraph'>
                <h3>{t("A-fifth-ln2")}</h3>
                <p>{t("A-fifth-ln3")}</p>
                <h3>{t("A-fifth-ln4")}</h3>
                <p>{t("A-fifth-ln5")}</p>
                <p>{t("A-fifth-ln6")}</p>
             </div>              
        </div>
        <div className='a-second-fifth-part'>
            <img src="https://st4.depositphotos.com/5653638/41797/i/450/depositphotos_417978804-stock-photo-indian-family-father-mother-son.jpg" alt="" />
        </div>
    </div>
</div>
  )
}

export default A_Fifth