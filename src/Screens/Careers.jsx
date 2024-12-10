import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Home/Footer'
import CareersHero from '../Components/Careere/CareersHero'
import CareersFrontend from '../Components/Careere/CareersFrontend'
import CareersCreator from '../Components/Careere/CareersCreator'
import CareersSeo from '../Components/Careere/CareersSeo'
import CareersDataAnalyst from '../Components/Careere/CareersDataAnalyst'
import CareersEngineer from '../Components/Careere/CareersEngineer'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Cookie/CookiePopup'


const Careers = () => {
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
        <CareersHero/>
        <CareersFrontend/>
        <CareersCreator/>
        <CareersSeo/>
        <CareersDataAnalyst/>
        <CareersEngineer/>
        <Footer/>
     <CookiePopup/>
      
      </div>
      </div>
    </>
  )
}

export default Careers