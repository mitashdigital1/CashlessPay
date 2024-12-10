import React from 'react'
import '../../Css/About/AboutVision.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const  AboutVision = () => {
    const{t,i18n} =useTranslation();
    return (
        <div className='about-vision'>
            <div className='about-vision-main'>
                <div className='about-vision-main-first-part'>
                    <div className='about-vision-main-first-part-handing'>
                        <h2>{t("A-seven-ln1")}</h2>
                        </div>
                        <div className='about-vision-main-first-part-paragraph'>
                            <h3>{t("A-seven-ln2")}</h3>
                            <p>{t("A-seven-ln3")}</p>
                            <h3>{t("A-seven-ln4")}</h3>
                            <p>{t("A-seven-ln5")}</p>
                            <p>{t("A-seven-ln6")} </p>
                        </div>
                    </div>
                    <div className='about-vision-main-second-part'>
                        <img src="https://st.depositphotos.com/2325841/2535/i/450/depositphotos_25350645-stock-photo-happy-couple.jpg" alt="" />
                    </div>
                </div>    
            </div>
    )
}

export default  AboutVision