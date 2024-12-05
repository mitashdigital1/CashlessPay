import React from 'react'
import '../../Css/Business/B_Second.css'
import { LuRefreshCcw } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { GiNetworkBars } from "react-icons/gi";
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const B_SecondSec = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='b-second'>
        <div className='b-main-second'>
          <div className="b-main-second-left">
            <img src="https://maticz.com/assets/images/trustwallet/trust_5.webp" alt="" />
          </div>
          <div className="b-main-second-right">
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

export default B_SecondSec