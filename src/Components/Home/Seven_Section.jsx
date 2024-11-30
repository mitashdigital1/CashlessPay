import React from 'react'
 
import '../../Css/Home/Seven.css'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const Seven_Section = () => {
  const{t,i18n} =useTranslation();
  return (
    <>
    <div className="contanier">
      <div className='main-seven'>
        <div className='seven'>

          <div className="right-seven-sec-item">
            <h1> 
            {t("seven-line1")}
             </h1>
            <p> {t("seven-line2")}</p>
          </div>

          <div className="left-seven-sec-item">
          <div className="seven-imgee">
            <img src='https://www.parasramindia.com/wp-content/uploads/2023/03/broker-in-india.png' style={{position:"relative"}} alt="" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default Seven_Section