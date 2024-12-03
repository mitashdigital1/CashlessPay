import React, { useState } from "react";
import "./CookiePopup.css";
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'
const CookiePopup = () => {
    const{t,i18n} =useTranslation();
    const [visible, setVisible] = useState(true);

    const handleAccept = () => {
        console.log("Cookies accepted!");
        setVisible(false);
    };

    const handleDeny = () => {
        console.log("Cookies denied!");
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="cookie-popup-container">
            <p className="cookie-popup-text">
             {t("coo-ln-1")}  {" "}
                <a href="/privacy-policy" className="cookie-popup-link">{t("coo-ln-2")} </a>
            </p>
            <div>
            <span onClick={handleDeny} className="cookie-popup-deny-button">
            {t("coo-ln-3")} 
            </span>
            <span onClick={handleAccept} className="cookie-popup-accept-button">
            {t("coo-ln-4")} 
            </span>
            </div>
        </div>
    
    );
};

export default CookiePopup;
