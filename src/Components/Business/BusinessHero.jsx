import React from 'react'
import '../../Css/Business/BusinessHero.css'
import flagsgif from "..//../assets/flags/flagsgif.gif"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const BusinessHero = () => {
  const{t,i18n} =useTranslation();
  return (
    <>
      <div className='business-hero'>
        <div className='business-hero-main'>
          <div className='top-box'>
            <div className='main-handing'>
              <h1>
               {t("B-h-ln1")} &nbsp;
                <span className="image-container">
                  <img src={flagsgif} alt="" />
                </span>
                &nbsp;{t("B-h-ln2")}
                <br></br>
                {t("B-h-ln3")} &nbsp; {t("B-h-ln4")}
              </h1>
              {/* <h1>from your global customers</h1> */}
            </div>
            <div className='second-handing'>
              <p>{t("B-h-ln5")} </p>
              {/* <p> </p> */}
            </div>
            <Link to="/contact">
              <button>{t("B-h-ln6")}</button>
            </Link>
          </div>
          <div className='bg'>
            <div className='image'>
              <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
            </div>
          </div>
          <div className='last-heading' >
            <h2>{t("B-h-ln7")}</h2>
            <p>{t("B-h-ln8")}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessHero