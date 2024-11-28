import React from 'react'
import '../../Css/Business/B_Nine.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const B_Nine = () => {
   const { t, i18n } = useTranslation();
   return (
      <div className='Nine'>
         <div className="main-Nine">
            <div className="Nine-first">
               <h1> {t("B-Nine-ln1")} </h1>
               <h1> &nbsp; &nbsp;{t("B-Nine-ln2")}</h1> </div>
            <div className="Nine-cardgroup">
               <div className="Nine-card"><div className="img"> <img src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
               </div>
                  <span>{t("B-Nine-ln3")}</span>
                  <h3>{t("B-Nine-ln4")}</h3>
                  <p>{t("B-Nine-ln5")}</p>
                  <span id='more'>{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src="https://images.unsplash.com/photo-1473976345543-9ffc928e648d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8" alt="" /> </div>
                  <span>{t("B-Nine-ln6")}</span>
                  <h3>{t("B-Nine-ln7")}</h3>
                  <p>{t("B-Nine-ln8")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src="https://plus.unsplash.com/premium_photo-1684407616508-b9e82c8bc8a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHVnZ2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                  <span>{t("B-Nine-ln9")}</span>
                  <h3>{t("B-Nine-ln10")}</h3>
                  <p>{t("B-Nine-ln11")}</p>
                  <span id='more' >{t("B-Nine-learn")}</span>
               </div>
               <div className="Nine-card"><div className="img"><img src="https://www.bet365.com/hub/focalimage/5ZQO2fsoFNswaNH1stZBBz/f3a98955fd1186bb58a6ec135727b750/2880x1500-Hub-Hero-Soccer-Additional/jpg/focalx-1868/focaly-890/imgWidth-2880/imgHeight-1500/targetWidth-1200/targetHeight-1500" alt="" /></div>
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
   )
}

export default B_Nine