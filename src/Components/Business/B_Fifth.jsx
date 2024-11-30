import React from 'react'
import '../../Css/Business/B_Fifth.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const B_Fifth = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="contanier">
            <div class="fifth">
                <div className="main-fifth">
                    <div class="left-section">
                        <h1>{t("B-fifth-ln1")}</h1>
                        <p>
                            {t("B-fifth-ln2")}
                        </p>
                    </div>
                    <div class="right-section">
                        <div class="step blckline">
                            <div className='points'>01</div>
                            <h4>{t("B-fifth-ln3")}</h4>
                            <p>
                                {t("B-fifth-ln4")}
                            </p>
                        </div>
                        <div class="step blckline">
                            <div className='points'>02</div>
                            <h4>{t("B-fifth-ln5")}</h4>
                            <p>
                                {t("B-fifth-ln6")}
                            </p>
                        </div>
                        <div class="step">
                            <div className='points'>03</div>
                            <h4>{t("B-fifth-ln7")}</h4>
                            <p>
                                {t("B-fifth-ln8")}
                            </p>
                        </div>
                        <Link to="/contact">
                            <button>{t("B-fifth-ln9")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B_Fifth