import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Home/Footer'
import ContactHero from '../Components/Contact/ContactHero'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Cookie/CookiePopup'

const Contact = () => {
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
         <Navbar setShowlogin={setShowlogin}/>
        <ContactHero/>
        <Footer/>
        <CookiePopup/>
    </div>
    </>
  )
}

export default Contact