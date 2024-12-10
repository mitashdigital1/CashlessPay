import React from 'react'
import '../../Css/Business/BusinessFeatures.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const BusinessFeatures = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='business-features'>
        <div className='business-features-main'>
          <div className="business-features-main-left">
            <img src="https://maticz.com/assets/images/trustwallet/trust_5.webp" alt="" />
          </div>
          <div className="business-features-main-right">
            <p>{t("B-s-ln1")}</p>
            <h2>{t("B-s-ln2")}</h2>
            <p>{t("B-s-ln3")}</p>
            {/* <button>{t("B-s-ln4")} </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessFeatures