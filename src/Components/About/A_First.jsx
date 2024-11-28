import React from 'react'
import '../../Css/About/A_First.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { useNavigate } from 'react-router-dom'
const A_First = () => {
  const{t,i18n} =useTranslation();
  const navigate = useNavigate();
  return (
    <div className='a-first'>
      <div className='a-main-first'>
        <div className='a-first-item'>
          <h1>{t("A-f-ln1")}</h1>
          <p><span id='cashlesspay'>{t("A-f-ln2")}</span>{t("A-f-ln3")}</p>
          <div className='input-box'>
            <input type="email" placeholder={t("A-f-ln5")}/>
            <button onClick={()=>navigate("/contactus@cashlesspay.co")} >{t("A-f-ln4")}</button>
          </div>
        </div>
        {/* <div className='a-image'>
          <img src="https://watermark.lovepik.com/photo/20211208/large/lovepik-forest-road-highway-picture_501669995.jpg" alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default A_First