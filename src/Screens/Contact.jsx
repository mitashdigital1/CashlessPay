import React,{useState ,useEffect} from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import COntact from '../Components/Contact/Co_First'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Home/CookiePopup'

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

         <div>
         <Header setShowlogin={setShowlogin}/>
         <div >
        <COntact/>
        <Footer/>
        <CookiePopup/>
        </div>
        
       
  
        </div>
      
    </div>
    </>
  )
}

export default Contact