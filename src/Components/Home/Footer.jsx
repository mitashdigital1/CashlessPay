import React from 'react'
import '../../Css/Home/Footer.css'
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import LogoFoter from "../../assets/Your paragraph text.png"
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const{t,i18n} =useTranslation();
    const navigate = useNavigate();
    return (
        <>
            <div className='main-footer'>
                <div className='line'></div>
                <div className='footer'>
                    <div className="nav-first-item">
                        <p>{t("Fo-ln1")}</p>
                        <a href="" onClick={()=>navigate("/")}>{t("Fo-ln2")}</a>
                        <a href="" onClick={()=>navigate("/businesspay")}>{t("Fo-ln3")}</a>
                        <a href="" onClick={()=>navigate("/about")}>{t("Fo-ln4")}</a>
                        <a href="" onClick={()=>navigate("/careers")}>{t("Fo-ln5")}</a>
                        <a href="" onClick={()=>navigate("/contact")}>{t("Fo-ln6")}</a>
                    </div>

                    <div className="nav-first-item">
                        <p>{t("Fo-ln7")}</p>
                        <a href="#">{t("Fo-ln8")}</a>
                        <a href="#">{t("Fo-ln9")}</a>
                        <a href="#">{t("Fo-ln10")}</a>
                        <a href="#">{t("Fo-ln11")}</a>
                        <a href="#">{t("Fo-ln12")}</a>
                        <a href="#"> {t("Fo-ln13")}</a>
                        <a href="#">{t("Fo-ln14")}</a>
                        <a href="#">{t("Fo-ln15")}</a>

                    </div>

                    <div className="nav-first-item">
                        <p>{t("Fo-ln16")}</p>
                        <a href="#">{t("Fo-ln17")}</a>
                        <a href="#">{t("Fo-ln18")}</a>
                        <a href="#">{t("Fo-ln19")}</a>

                    </div>

                    <div className="nav-first-item">
                        <p>{t("Fo-ln20")}</p>
                        <a href="#">{t("Fo-ln21")}</a>
                        <a href="#">{t("Fo-ln22")}</a>

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
                    <span>{t("Fo-ln23")}</span>
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