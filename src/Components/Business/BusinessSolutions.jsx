import React from 'react';
import '../../Css/Business/BusinessSolutions.css';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const BusinessSolutions = () => {
  const{t,i18n} =useTranslation();
  return (
    <div className="business-solutions">
      <div className="business-solutions-main">
        <div className="haanding">
          <p>{t("B-t-ln1")}</p>
          <h2>{t("B-t-ln2")} </h2>
          <p>{t("B-t-ln3")} </p>
           {/* <button>{t("B-t-ln4")}</button> */}
        </div>
        <div className="imagee">
          <img
            src="https://lili.co/wp-content/uploads/2023/01/Homepage_Hero_Image_2008x1792-e1688377052449.png"
            alt="Payment Integration"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
