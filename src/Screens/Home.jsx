import React, { useState ,useEffect } from 'react'

import Navbar from '../Components/Navbar/Navbar'
import HomeHero from '../Components/Home/HomeHero'
import HomeFeatureOne from '../Components/Home/HomeFeatureOne'
import HomeFeatureTwo from '../Components/Home/HomeFeatureTwo'
import HomeFeatureThree from '../Components/Home/HomeFeatureThree'
import HomeFeatureFour from '../Components/Home/HomeFeatureFour'
import HomeFeatureFive from '../Components/Home/HomeFeatureFive'
import FooterSec from '../Components/Home/Footer'
import CookiePopup from '../Components/Cookie/CookiePopup'
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
     <Navbar setShowlogin={setShowlogin}/>
     <HomeHero setShowlogin={setShowlogin}/>
     <HomeFeatureOne/>
     <HomeFeatureTwo/>
     <HomeFeatureThree/>
     <HomeFeatureFour/>
     <HomeFeatureFive/>
     <FooterSec/> 
     <CookiePopup/>

   </div>
   </div>
   </>
  )
}

export default Home