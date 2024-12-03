import React, { useState } from 'react';
import '../../Css/Contact/Co_First.css';
import { useTranslation } from 'react-i18next';

const Co_First = () => {
    const { t } = useTranslation();
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            number: event.target[2].value,
            subject: event.target[3].value,
            reason: event.target[4].value,
            message: event.target[5].value,
        };

        console.log('Form Data Submitted:', formData);

        try {
            const response = await fetch('http://localhost:8080/api/send-email', {
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
            setIsPopupVisible(true); // Show success popup
            setTimeout(() => setIsPopupVisible(false), 3000);
        } catch (error) {
            if (error.message.includes('Failed to fetch') || error.message.includes('ERR_CONNECTION_REFUSED')) {
                console.error('Connection refused:', error);
                alert('Unable to connect to the server. Please ensure the backend server is running and try again.');
            } else {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again.');
            }
        }
    };

    return (
        <div className="con-main">
            <div className="main-heading">
                <h1>{t('CO-ln1')}</h1>
            </div>
            <div className="co-first">
                <div className="co-main-first">
                    <div className="co-first-item">
                        <h1>{t('CO-ln2')}</h1>
                    </div>
                    <div className="co-first-pragraph">
                        <p>{t('CO-ln3')}</p>
                        <p>{t('CO-ln4')}</p>
                    </div>
                </div>
                <div className="main-form">
                    <h3>{t('CO-ln5')}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-first-item">
                            <input type="text" placeholder={t('CO-ln6')} required />
                            <input type="email" placeholder="support@cashlesspay.com" required />
                        </div>
                        <div className="form-second-item">
                            <input type="number" placeholder={t('CO-ln7')} required />
                            <input type="text" placeholder={t('CO-ln8')} required />
                        </div>
                        <div className="from-drop-down">
                            <select name="reason" required>
                                <option value="">{t('CO-ln9')}</option>
                                <option>{t('CO-ln10')}</option>
                                <option>{t('CO-ln11')}</option>
                                <option>{t('CO-ln12')}</option>
                                <option>{t('CO-ln13')}</option>
                            </select>
                        </div>
                        <div className="text-from">
                            <textarea placeholder={t('CO-ln14')} required></textarea>
                        </div>
                        <div className="form-btn">
                            <button type="submit">{t('CO-ln15')}</button>
                        </div>
                    </form>
                    {isPopupVisible && (
                        <div className="popup-message">
                            <p>{t('CO-ln16')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Co_First;
