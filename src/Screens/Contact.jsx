import React,{useState} from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import COntact from '../Components/Contact/Co_First'
import Getstart from '../Components/Getstarted/Getstart'


const Contact = () => {
  const[showlogin,setShowlogin]= useState(false);

  return (
    <>
        {showlogin?<Getstart setShowlogin={setShowlogin}/>:<></>}

         <div>
         <Header setShowlogin={setShowlogin}/>
         <div >
        <COntact/>
        <Footer/>
        </div>
        
       
  
        </div>
      
    
    </>
  )
}

export default Contact