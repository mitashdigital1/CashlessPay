import React from 'react'
import '../../Css/About/A_Eight.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { useNavigate } from 'react-router-dom'
const A_Eight = () => {
  const{t,i18n} =useTranslation();
  const navigate = useNavigate();
  return (
    <div className='a-eight'>
        <div className='a-main-eight'>
            <div className='a-eight-item'>
            <h1>{t("A-eight-ln1")}</h1>
                <p>{t("A-eight-ln2")}</p>
                <button onClick={()=>navigate("/careers")} >{t("A-eight-ln3")}</button>
            </div>
        </div>
    </div>
  )
}

export default A_Eight