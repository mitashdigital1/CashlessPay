import React from 'react'

import '../../Css/Home/Eight.css'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const Eight_Section = () => {
    const{t,i18n} =useTranslation();
    return (
        <>
        <div className="contanier">
            <div className='main-eight'>
                <div className='eight'>
                    <div className="eight-one">
                        <h5>{t("eight-ln1")}</h5>
                        <p>{t("eight-ln2")}</p>
                    </div>
                    <div className="eight-two">
                        <h5>{t("eight-ln3")}</h5>
                        <p>{t("eight-ln4")}</p>
                    </div>
                    <div className="eight-three">
                        <h5>{t("eight-ln5")}</h5>
                        <p>{t("eight-ln6")}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Eight_Section