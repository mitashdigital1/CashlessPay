import React, { useState, useEffect } from "react";
import "../../Css/Cookie/CookiePopup.css";
import { useTranslation } from "react-i18next";

const CookiePopup = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setVisible(true); 
        }
    }, []);

    const handleAccept = () => {
        console.log("Cookies accepted!");
        localStorage.setItem("cookieConsent", "accepted"); // Save choice in localStorage
        setVisible(false);
    };

    const handleDeny = () => {
        console.log("Cookies denied!");
        localStorage.setItem("cookieConsent", "denied"); // Save choice in localStorage
        setVisible(false);
    };

    if (!visible) {
        return null; // Don't render popup if not visible
    }

    return (
        <div className="cookie-popup-container">
            <p className="cookie-popup-text">
                {t("coo-ln-1")}{" "}
                <a href="/privacy-policy" className="cookie-popup-link">
                    {t("coo-ln-2")}
                </a>
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
