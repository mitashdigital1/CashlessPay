import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const C_thrid_section = () => {
    const{t,i18n} =useTranslation();
  return (
    <> <div className='C_section'>
    <div className='C_section-content' >
    <div className="C_section-left">
        <h1>{t("C-t-ln1")}</h1>
        <p>{t("C-t-ln2")}
        </p>
    </div>
    <div className="C_section-right">
    <span></span>    
        <div className='uper'>
            <h3>{t("C-t-ln3")}</h3>
            <p>{t("C-t-ln4")}</p>
            </div>
            <span></span>    
    <div className='down'>
        <p>{t("C-t-ln5")}</p>
    <p>{t("C-t-ln6")}</p>
    <p>{t("C-t-ln7")}</p>
    <p>{t("C-t-ln8")}</p>
    <p>{t("C-t-ln9")}</p>
    </div>
        
    </div>
    </div>
<hr />
</div></>
  )
}

export default C_thrid_section