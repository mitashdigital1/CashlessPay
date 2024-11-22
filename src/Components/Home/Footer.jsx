import React from 'react'
import '../../Css/Home/Footer.css'
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import LogoFoter from "../../assets/Your paragraph text.png"


const Footer = () => {
    return (
        <>
            <div className='main-footer'>
                <div className='line'></div>
                <div className='footer'>
                    <div className="nav-first-item">
                        <p>Company</p>
                        <a href="http://localhost:5173/">PersonalPay</a>
                        <a href="http://localhost:5173/businesspay">BusinessPay</a>
                        <a href="http://localhost:5173/about">About</a>
                        <a href="http://localhost:5173/careers">Careers</a>
                        <a href="http://localhost:5173/contact">Contact</a>
                    </div>

                    <div className="nav-first-item">
                        <p>Cashlesspay</p>
                        <a href="#">consectetur</a>
                        <a href="#">obcaecati</a>
                        <a href="#">consequuntur</a>
                        <a href="#">nostrum</a>
                        <a href="#">itaque</a>
                        <a href="#"> sapiente</a>
                        <a href="#">reiciendis</a>
                        <a href="#">deserunt</a>

                    </div>

                    <div className="nav-first-item">
                        <p>Resources</p>
                        <a href="#">lorem</a>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Privacy Policy</a>

                    </div>

                    <div className="nav-first-item">
                        <p>Help</p>
                        <a href="#">lorem</a>
                        <a href="#">lorem</a>

                    </div>

                </div>


                <div className='footer-second'>
                    <div className="logo">
                        <img src={LogoFoter} alt="" />
                    </div>

                    <div className='icons'>
                        <FaXTwitter />
                        <IoLogoInstagram />
                        <IoLogoLinkedin />
                    </div>
                </div>
                <div className='line'></div>
                <div className='footer-end'>
                    <span>Copyright © 2024 CashlessPay. We’re committed to providing you with a secure and seamless experience. Reach out anytime, and our team will get back to you as soon as possible.</span>
                </div>

                {/* <div className='footer-thred'>
                    <span>©2024 Blaze Payments Inc.</span>
                    <span className='span-two'>Terms of use   Privacy policy</span>

                    <div className='footer-end'>
                        <span>We use cookies to optimise our services. Read our privacy policy.</span>
                        <button id='btn1'>DENY</button>
                        <button>ACCEPT</button>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Footer