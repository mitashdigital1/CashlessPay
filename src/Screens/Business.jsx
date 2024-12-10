import React, {useState,useEffect}  from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Home/Footer'
import BusinessHero from '../Components/Business/BusinessHero'
import BusinessFeatures from '../Components/Business/BusinessFeatures'
import BusinessSolutions from '../Components/Business/BusinessSolutions'
import BusinessGrow from '../Components/Business/BusinessGrow'
import BusinessStatistics from '../Components/Business/BusinessStatistics'
import BusinessSecurity from '../Components/Business/BusinessSecurity'
import BusinessHelped from '../Components/Business/BusinessHelped'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Cookie/CookiePopup'

const Business = () => {
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
        {showlogin?<Getstart setShowlogin={setShowlogin}/>:<></>}
         <div>
         <Navbar setShowlogin={setShowlogin}/>
          <BusinessHero/>
          <BusinessFeatures/>
          <BusinessSolutions/>      
          <BusinessStatistics/>   
          <BusinessGrow/>
          <BusinessSecurity/>
          <BusinessHelped/>  
        <Footer/>
        <CookiePopup/>
        </div>
         
    </>
  )
}

export default Business