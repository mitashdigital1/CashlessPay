import React from 'react'
 
import '../../Css/Home/HomeFeatureFour.css'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const HomeFeatureFour = () => {
  const{t,i18n} =useTranslation();
  return (
    <>
    <div className="contanier">
      <div className='feature-four'>
        <div className='feature-four-main'>

          <div className="feature-four-main-right">
            <h1> 
            {t("seven-line1")}
             </h1>
            <p> {t("seven-line2")}</p>
          </div>

          <div className="feature-four-main-left">
          <div className="feature-four-main-imgee">
            <img src='https://www.parasramindia.com/wp-content/uploads/2023/03/broker-in-india.png' style={{position:"relative"}} alt="" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default HomeFeatureFour;