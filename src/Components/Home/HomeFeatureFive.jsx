import React from 'react'

import '../../Css/Home/HomeFeatureFive.css'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const HomeFeatureFive = () => {
    const{t,i18n} =useTranslation();
    return (
        <>
        <div className="contanier">
            <div className='feature-five'>
                <div className='feature-five-main'>
                    <div className="feature-five-main-one">
                        <h5>{t("eight-ln1")}</h5>
                        <p>{t("eight-ln2")}</p>
                    </div>
                    <div className="feature-five-main-two">
                        <h5>{t("eight-ln3")}</h5>
                        <p>{t("eight-ln4")}</p>
                    </div>
                    <div className="feature-five-main-three">
                        <h5>{t("eight-ln5")}</h5>
                        <p>{t("eight-ln6")}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomeFeatureFive