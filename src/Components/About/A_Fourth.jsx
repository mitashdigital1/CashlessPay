import React from 'react'
import '../../Css/About/A_Fourth.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const A_Fourth = () => {
  const{t,i18n} =useTranslation();
  return (
    <div className='a-fourth'>
        <div className='a-main-fourth'>
            <div className='a-first-part'>
                <h3>{t("A-four-ln1")}</h3>
                <p>{t("A-four-ln2")}
              </p>
              <h3>{t("A-four-ln3")}</h3>
              <p>{t("A-four-ln4")}</p>
            </div>
            <div className='a-second-part'>
                <img src="https://media.licdn.com/dms/image/C5612AQEp8HM7C7YVTA/article-cover_image-shrink_720_1280/0/1639396205961?e=2147483647&v=beta&t=nv43-BKovUD7ClcMdV2ZRRjxSzRV_9lePVOCrG-SJkc" alt="" />
            </div>
        </div>
    </div>
  )
}

export default A_Fourth