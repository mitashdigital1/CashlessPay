import React from "react";
import '../../Css/Business/BusinessStatistics.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n' 

const BusinessStatistics = () => {
    const{t,i18n} =useTranslation();
    return (
        <div class="features-container">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3 class="feature-title">{t("B-seven-ln1")} <br /> {t("B-seven-ln2")}</h3>
                <p class="feature-description">
                {t("B-seven-ln3")}
                </p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔄</div>
                <h3 class="feature-title">{t("B-seven-ln4")} <br /> {t("B-seven-ln5")}</h3>
                <p class="feature-description">
                {t("B-seven-ln6")}
                </p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3 class="feature-title">{t("B-seven-ln7")} <br />{t("B-seven-ln8")}</h3>
                <p class="feature-description">
                {t("B-seven-ln9")}
                </p>
            </div>
        </div>

    )
};

export default BusinessStatistics;
