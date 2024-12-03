import React, { useState } from "react";
import "./CookiePopup.css";

const CookiePopup = () => {
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
                We use cookies to optimize our services.{" "}
                <a href="/privacy-policy" className="cookie-popup-link">Read our privacy policy</a>.
            </p>
            <div>
            <span onClick={handleDeny} className="cookie-popup-deny-button">
                DENY
            </span>
            <span onClick={handleAccept} className="cookie-popup-accept-button">
                ACCEPT
            </span>
            </div>
        </div>
    
    );
};

export default CookiePopup;
