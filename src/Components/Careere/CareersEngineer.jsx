import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const CareersEngineer = () => {
  const{t,i18n} =useTranslation();
  return (
    <><div className='careers-features'>
    <div className='careers-features-content' >
    <div className="careers-features-left">
        <h1>{t("C-fifth-ln1")}</h1>
        <p>{t("C-fifth-ln2")}
        </p>
    </div>
    <div className="careers-features-right">
        <span></span>
        <div className='uper'>
            <h3>{t("C-fifth-ln3")}</h3>
            <p>{t("C-fifth-ln4")}</p>
            </div>
          <span></span>  
    <div className='down'>
        <p>{t("C-fifth-ln5")}</p>
    <p>{t("C-fifth-ln6")}</p>
    <p>{t("C-fifth-ln7")}</p>
    </div>
        
    </div>
    </div>

</div></>
  )
}

export default CareersEngineer;