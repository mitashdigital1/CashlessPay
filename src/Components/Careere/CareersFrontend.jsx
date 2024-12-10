import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import "../../Css/Careere/CareersFeatures.css"
const CareersFrontend = () => {
    const{t,i18n} =useTranslation();
  return (
    <>
    <div className='careers-features'>
        <hr />
        <div className='careers-features-content' >
        <div className="careers-features-left">
            <h1>{t("C-f-ln1")}</h1>
            <p>{t("C-f-ln2")}
            </p>
        </div>
        <div className="careers-features-right">
            <span></span>
            <div className='uper'>
                <h3>{t("C-f-ln3")}</h3>
                <p>{t("C-f-ln4")}</p>
                </div>
                <span></span>   
        <div className='down'>
            <p>{t("C-f-ln5")}</p>
        <p>{t("C-f-ln6")}</p>
        <p>{t("C-f-ln7")}</p>
        <p>{t("C-f-ln8")}</p>
        <p>{t("C-f-ln9")}</p>
        </div>            
        </div>
        </div>
    <hr />
    </div>
    </>
  )
}

export default CareersFrontend;