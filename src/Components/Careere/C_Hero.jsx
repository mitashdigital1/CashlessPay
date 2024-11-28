import React from 'react'
import '../../Css/Careere/C_Hero.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const C_Hero = () => {
  const{t,i18n} =useTranslation();
  return (
    <>
        <div className='c-hero'>
            <div className='c-hero-main'>
            <div className='c-hero-handing'>
            <h1>{t("C-h-ln1")}</h1>
            </div>
            <div className='c-hero-paragraph'>
                <p>{t("C-h-ln2")}</p>
            </div>
            </div>
        </div>
        <div className='c-hero-down'>
          <h3>{t("C-h-ln3")}</h3>
        </div>
        <hr />
    </>
  )
}

export default C_Hero