import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const CareersCreator = () => {
    const{t,i18n} =useTranslation();
  return (
    <div className='careers-features'>
        <div className='careers-features-content' >
        <div className="careers-features-left">
            <h1>{t("C-s-ln1")}</h1>
            <p>{t("C-s-ln2")}
            </p>
        </div>
        <div className="careers-features-right">
        <span></span>    
            <div className='uper'>
                <h3>{t("C-s-ln3")}</h3>
                <p>{t("C-s-ln4")}</p>
                </div>
                <span></span>        
        <div className='down'>
            <p>{t("C-s-ln5")}</p>
        <p>{t("C-s-ln6")}</p>
        </div>
            
        </div>
        </div>
    <hr />
    </div>
  )
}

export default CareersCreator;