import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const C_fourth_section = () => {
  const{t,i18n} =useTranslation();
  return (
    <><div className='C_section'>
    <div className='C_section-content' >
    <div className="C_section-left">
        <h1>{t("C-four-ln1")}</h1>
        <p>{t("C-four-ln2")}
        </p>
    </div>
    <div className="C_section-right">
    <span></span>    
        <div className='uper'>
            <h3>{t("C-four-ln3")}</h3>
            <p>{t("C-four-ln4")}</p>
            </div>
            <span></span>        
    <div className='down'>
        <p>{t("C-four-ln5")}</p>
    <p>{t("C-four-ln6")}</p>
    <p>{t("C-four-ln7")}</p>
    <p>{t("C-four-ln8")}</p>
    <p>{t("C-four-ln9")}</p>
    </div>
        
    </div>
    </div>
<hr />
</div></>
  )
}

export default C_fourth_section