import React from 'react'
import '../../Css/Business/B_Nine.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import ninesec2p from '..//../assets/bussines/1.jpg'
import ninesec1p from '..//../assets/bussines/2.jpg'
import ninesec3p from '..//../assets/bussines/3.jpg'
import ninesec4p from '..//../assets/bussines/4.jpg'
const B_Nine = () => {
   const { t, i18n } = useTranslation();
   return (
      <div className="contanier">
      <div className='Nine'>
         <div className="main-Nine">
            <div className="Nine-first">
               <h1> {t("B-Nine-ln1")} </h1>
               <h1> &nbsp; &nbsp;{t("B-Nine-ln2")}</h1> </div>
            <div className="Nine-cardgroup">
               <div className="Nine-card"><div className="img"> <img src={ninesec1p} alt="" />
               </div>
                  <span>{t("B-Nine-ln3")}</span>
                  <h3>{t("B-Nine-ln4")}</h3>
                  <p>{t("B-Nine-ln5")}</p>
                  <span id='more'>{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src={ninesec2p} alt="" /> </div>
                  <span>{t("B-Nine-ln6")}</span>
                  <h3>{t("B-Nine-ln7")}</h3>
                  <p>{t("B-Nine-ln8")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src={ninesec3p} alt="" /></div>
                  <span>{t("B-Nine-ln9")}</span>
                  <h3>{t("B-Nine-ln10")}</h3>
                  <p>{t("B-Nine-ln11")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src={ninesec4p} alt="" /></div>
                  <span>{t("B-Nine-ln12")}</span>
                  <h3>{t("B-Nine-ln13")}</h3>
                  <p>{t("B-Nine-ln14")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span></div>
            </div>
            <div className="sec-cardgroup">
               <div className="sec-card"><div className="img"><img src="https://images.unsplash.com/photo-1520460095596-52dcd38c5f20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D" alt="" /></div>
                  <span>{t("B-Nine-ln15")}</span>

                  <p>{t("B-Nine-ln16")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span></div>
               <div className="sec-card"><div className="img"><img src="https://plus.unsplash.com/premium_photo-1682430225873-c610f5e3559b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDJ8fHxlbnwwfHx8fHw%3D" alt="" /></div>
                  <span>{t("B-Nine-ln17")}</span>

                  <p>{t("B-Nine-ln18")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span></div>
            </div>
         </div>
      </div>
      </div>
   )
}

export default B_Nine