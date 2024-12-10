import React from 'react'
import '../../Css/About/AboutHistory.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const AboutHistory = () => {
    const{t,i18n} =useTranslation();
    return (
        <div className='about-History'>
        <div className='about-History-main'>
        <div className='about-History-main-second-part'>
                <img src="https://media.istockphoto.com/id/184993904/photo/large-group-of-happy-people-standing-together.jpg?s=612x612&w=0&k=20&c=u8rvIbtmWNnexS5xK4uhIZwzXsLhmnIF-_kLAv6b0Lo=" alt="" />
            </div>
            <div className='about-History-main-first-part'>
                 <div className='a-first-sxith-handing'>
                 <h2>{t("A-six-ln1")}</h2> 
                 </div> 
                 <div className='a-first-sixth-paragraph'>
                    <h3>{t("A-six-ln2")}</h3>
                    <p>{t("A-six-ln3")}</p>
                    <h3>{t("A-six-ln4")}</h3>
                    <p>{t("A-six-ln5")}</p>
                    <p>{t("A-six-ln6")}</p>
                 </div>              
            </div>
           
        </div>
    </div>
    )
}

export default AboutHistory