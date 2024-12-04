import React,{useState ,useEffect} from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import A_First from '../Components/About/A_First'
// import A_Handing from '../Components/About/A_Hnding'
// import A_Second from '../Components/About/A_Second'
// import A_Thred from '../Components/About/A_Thred'
import A_Fourth from '../Components/About/A_Fourth'
import A_Fifth from '../Components/About/A_Fifth'
import A_Sixth from '../Components/About/A_Sixth'
import A_Seven from '../Components/About/A_Seven'
import A_Eight from '../Components/About/A_Eight'
import Getstart from '../Components/Getstarted/Getstart'
import CookiePopup from '../Components/Home/CookiePopup'

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
      <Header setShowlogin={setShowlogin}/>
      
        <A_First/>
        {/* <A_Handing/> */}
        {/* <A_Second/> */}
        <A_Fourth/>
        <A_Fifth/>
        <A_Sixth/>
        <A_Seven/>
        {/* <A_Thred/> */}
         <A_Eight/>
        <Footer/>
      <CookiePopup/>
      
      </div>
      </div>
    </>
  )
}

export default About