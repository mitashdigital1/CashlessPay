import React, { useState ,useEffect } from 'react'

import Header from '../Components/Home/Header'
import HeroSec from '../Components/Home/Hero_Section'
import SecondSec from '../Components/Home/Second_Section'
import ThredSec from '../Components/Home/Thred_Section'
import ForthSec from '../Components/Home/Four_Section'
import FifthSec from '../Components/Home/Fifth_Section'
import SixthSec from '../Components/Home/Sixth_Section'
import SevenSec from '../Components/Home/Seven_Section'
import VideoSec from '../Components/Home/Video_Section'
import FooterSec from '../Components/Home/Footer'
import Eightsec from '../Components/Home/Eight_Section'
import CookiePopup from '../Components/Home/CookiePopup'
// import Business from './Business'
import Careers from './Careers'
import Getstart from '../Components/Getstarted/Getstart'
 

const Home = () => {
  const[showlogin,setShowlogin]= useState(false);
  useEffect(() => {
    if (showlogin) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showlogin]);
  return (
    <>
    <div className="div" style={{width:"1300px", maxWidth:"100%", margin:"0 auto"}}>
    {showlogin?<Getstart setShowlogin={setShowlogin}/>:<></>}
    <div>
     <Header setShowlogin={setShowlogin}/>
     <HeroSec setShowlogin={setShowlogin}/>
     {/* <SecondSec/> */}
     {/* <ThredSec/>  */}
     <ForthSec/>
     <FifthSec/>
     <SixthSec/>
     <SevenSec/>
     <Eightsec/>
     {/* <VideoSec/>  */}
     <FooterSec/> 
     <CookiePopup/>
     

   </div>
   </div>
   </>
  )
}

export default Home