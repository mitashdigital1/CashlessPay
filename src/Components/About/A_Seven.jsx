import React from 'react'
import '../../Css/About/A_Seven.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const A_Seven = () => {
    const{t,i18n} =useTranslation();
    return (
        <div className='a-seven'>
            <div className='a-main-seven'>
                <div className='a-seven-left'>
                    <div className='a-seven-main-handing'>
                        <h2>{t("A-seven-ln1")}</h2>
                        <div className='a-seven-main-peragraph'>
                            <h3>{t("A-seven-ln2")}</h3>
                            <p>{t("A-seven-ln3")}</p>
                            <h3>{t("A-seven-ln4")}</h3>
                            <p>{t("A-seven-ln5")}</p>
                            <p>{t("A-seven-ln6")} </p>
                        </div>
                    </div>
                    <div className='a-seven-image'>
                        <img src="https://st.depositphotos.com/2325841/2535/i/450/depositphotos_25350645-stock-photo-happy-couple.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_Seven