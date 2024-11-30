import React, { useState } from 'react'
import '../../Css/Contact/Co_First.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
const Co_First = () => {
    const { t, i18n } = useTranslation();
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000);
    };

    return (
        <div className=' con-main' >
            <div className="main-heading">
                <h1>{t("CO-ln1")}</h1>

            </div>
            <div className='co-first'>
                <div className='co-main-first'>
                    <div className='co-first-item'>
                        <h1>{t("CO-ln2")}</h1>

                    </div>
                    <div className='co-first-pragraph'>
                        <p>{t("CO-ln3")}</p>
                        <p>{t("CO-ln4")}
                        </p>
                    </div>
                </div>
                <div className='main-form'>
                    <h3>{t("CO-ln5")}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='form-first-item'>
                            <input type="text" placeholder={t("CO-ln6")} />
                            <input type="email" placeholder='support@cashlesspay.com' />
                        </div>
                        <div className='form-second-item'>
                            <input type="number" placeholder={t("CO-ln7")} />
                            <input type="text" placeholder={t("CO-ln8")} />
                        </div>
                        <div className='from-drop-down'>
                            <select>
                                <option value="Why do you want to get in touch?">{t("CO-ln9")}</option>
                                <option>{t("CO-ln10")}</option>
                                <option>{t("CO-ln11")}</option>
                                <option>{t("CO-ln12")}</option>
                                <option>{t("CO-ln13")}</option>
                            </select>
                        </div>
                        <div className='text-from'>
                            <textarea placeholder={t("CO-ln14")}></textarea>
                        </div>
                        <div className='form-btn'>
                            <button>{t("CO-ln15")} </button>
                        </div>
                    </form>
                    {isPopupVisible && (
                        <div className="popup-message">
                            <p>{t("CO-ln16")}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Co_First