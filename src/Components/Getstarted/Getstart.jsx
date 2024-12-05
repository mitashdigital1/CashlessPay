import React from 'react'
import '../../Css/Getstarted/Getstart.css'
import { useState ,useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

const Getstart = ({setShowlogin}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selected, setSelected] = useState("NZ");
  const{t,i18n} =useTranslation();

  const countryNames = {
    NZ: 'New Zealand',
    ID: 'Indonesia',
    TH: 'Thailand',
    VN: 'Vietnam',
    MY: 'Malaysia',
    PH: 'Philippines',
    SG: 'Singapore',
    MM: 'Myanmar',
    KH: 'Cambodia',
    AU: 'Australia',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      number: event.target.mobile.value,
      country: countryNames[selected],
    };

    console.log('Form Data Submitted:', formData);

    try {
        const response = await fetch('/api/send-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            console.error('Failed to send email. Status:', response.status);
            if (response.status === 404) {
                alert('The email service is not available. Please try again later.');
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return;
        }

        const result = await response.json();
        console.log(result.message);
        event.target.reset();
        setIsPopupVisible(true); // Show success popup
        setTimeout(() => setIsPopupVisible(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('An error occurred. Please try again.');
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000);
    }
};

 
  return (
    <div className='login-popup'>
        <form onSubmit={handleSubmit} className='login-popup-container'>
          <div className='login-popup-title'>
           <h2>{t("G-ln1")}</h2>
           <h1 onClick={()=>setShowlogin(false)} >X</h1>
          </div>
          <div className="login-popup-content">
            <p>{t("G-ln2")}</p>
          </div>
          <div className="login-popup-inputs">
           <label htmlFor="email">{t("G-ln3")}</label>
            <input id='email' type="email" placeholder={t("G-ln4")} required/>
            <label htmlFor="mobile">{t("G-ln5")}</label>
            <input id='mobile' type="number" placeholder={t("G-ln6")}  required/>
            <label htmlFor="country">{t("G-ln7")}</label>
        

      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable
        searchPlaceholder="Search countries"
        className="custom-flag-select "
        selectButtonClassName="menu-flags-button"
        alignOptionsToLeft
        
        countries={["NZ", "ID", "TH", "VN", "MY", "PH","SG","MM","KH","AU"]}
      />
    
        
            </div>
          <div className='login-popup-btn'>
            <button>{t("G-ln8")}</button>
          </div>
          <div className="login-popup-condition">
            <p>{t("G-ln9")}</p>
          </div>
          {/* <span style={{marginTop:"-15px" ,fontWeight:"400"} }>{t("G-ln10")}</span> */}
        </form>
        {isPopupVisible && (
                        <div className="popup-message">
                            <p>{t('CO-ln16')}</p>
                        </div>
                    )}
    </div>
  )
}

export default Getstart