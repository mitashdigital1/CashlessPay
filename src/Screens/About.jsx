import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Home/Footer'
import AboutHero from '../Components/About/AboutHero'
import AboutMission from '../Components/About/AboutMission'
import AboutTeam from '../Components/About/AboutTeam'
import AboutHistory from '../Components/About/AboutHistory'
import AboutVision from '../Components/About/AboutVision'
import AboutContact from '../Components/About/AboutContact'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Cookie/CookiePopup'

const About = () => {
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
        <AboutHero/> 
        <AboutMission/>
        <AboutTeam/>
        <AboutHistory/>
        <AboutVision/>
         <AboutContact/>
        <Footer/>
      <CookiePopup/>
      
      </div>
      </div>
    </>
  )
}

export default About