import React from 'react'
import '../../Css/About/AboutMission.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const AboutMission = () => {
  const{t,i18n} =useTranslation();
  return (
    <div className='about-mission'>
        <div className='about-mission-main'>
            <div className='about-mission-main-first-part'>
                <h3>{t("A-four-ln1")}</h3>
                <p>{t("A-four-ln2")}
              </p>
              <h3>{t("A-four-ln3")}</h3>
              <p>{t("A-four-ln4")}</p>
            </div>
            <div className='about-mission-main-second-part'>
                <img src="https://media.licdn.com/dms/image/C5612AQEp8HM7C7YVTA/article-cover_image-shrink_720_1280/0/1639396205961?e=2147483647&v=beta&t=nv43-BKovUD7ClcMdV2ZRRjxSzRV_9lePVOCrG-SJkc" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutMission