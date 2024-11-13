import React from 'react'
import '../Css/Footer.css'
import {IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import LogoFoter from "../assets/Your paragraph text.png"


const Footer = () => {
    return (
        <>
            <div className='main-footer'>
                <div className='footer'>
                    <div className="footer-left-logo">
                        <a href="#">
                           <img src={LogoFoter} alt="" />
                        </a>
                    </div>

                    <div className="footer-center-item">
                      <a href="#">PersonalPay</a>
                      <a href="#">BusinessPay</a>
                      <a href="#">About</a>
                      <a href="#">Careers</a>
                      <a href="#">Contact</a>
                    </div>

                    <div className="nav-right-item">

                        <div className='btn1'>
                            <button>DOWNLOAD APP</button>
                        </div>
                    </div>
                </div>


                <div className='footer-second'>
                    
                    <div className='icons'>
                    <FaXTwitter />
                    <IoLogoInstagram />
                    <IoLogoLinkedin/>
                    </div>
                </div>

                <div className='footer-thred'>
                    <span>©2024 Blaze Payments Inc.</span>
                    <span className='span-two'>Terms of use   Privacy policy</span>
                    
                    <div className='footer-end'>
                    <span>We use cookies to optimise our services. Read our privacy policy.</span>
                    <button id='btn1'>DENY</button>
                    <button>ACCEPT</button>
                </div>
                </div>
               
            </div>
        </>
    )
}

export default Footer