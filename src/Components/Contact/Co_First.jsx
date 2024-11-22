import React, { useState } from 'react'
import '../../Css/Contact/Co_First.css'

const Co_First = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000);
    };

    return (
        <div >
            <div className="main-heading">
                <h1>Contact Us</h1>

            </div>
            <div className='co-first'>
                <div className='co-main-first'>
                    <div className='co-first-item'>
                        <h1>Get in Touch with CASHLESSPAY</h1>

                    </div>
                    <div className='co-first-pragraph'>
                        <p>We’re here to help with any questions or support you may need.</p>
                        <p>Whether you have questions about our services, need help with your account, or want to learn more about how CASHLESSPAY can support your business, our team is ready to assist. Please reach out using the contact form below or connect with us through our customer support channels.
                        </p>
                    </div>
                </div>
                <div className='main-form'>
                    <h3>Send us a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='form-first-item'>
                            <input type="text" placeholder='Full name' />
                            <input type="email" placeholder='support@cashlesspay.com' />
                        </div>
                        <div className='form-second-item'>
                            <input type="number" placeholder='Phone number' />
                            <input type="text" placeholder='Address' />
                        </div>
                        <div className='from-drop-down'>
                            <select>
                                <option value="Why do you want to get in touch?">Why do you want to get in touch?</option>
                                <option>General inquiry</option>
                                <option>Technical support</option>
                                <option>Partnership opportunity</option>
                                <option>Account deletion</option>
                            </select>
                        </div>
                        <div className='text-from'>
                            <textarea placeholder='Enter Your Message'></textarea>
                        </div>
                        <div className='form-btn'>
                            <button>SUBMIT YOUR MESSAGE </button>
                        </div>
                    </form>
                    {isPopupVisible && (
                        <div className="popup-message">
                            <p>Your application is submitted successfully!</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Co_First