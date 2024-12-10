import React from 'react'
import '../../Css/Careere/CareersHero.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const CareersHero = () => {
  const{t,i18n} =useTranslation();
  return (
    <>
        <div className='careers-hero'>
            <div className='careers-hero-main'>
            <div className='careers-hero-handing'>
            <h1>{t("C-h-ln1")}</h1>
            </div>
            <div className='careers-hero-paragraph'>
                <p>{t("C-h-ln2")}</p>
            </div>
            </div>
        </div>
        <div className='careers-hero-down'>
          <h3>{t("C-h-ln3")}</h3>
        </div>
    </>
  )
}

export default CareersHero;