import React, {useState}  from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import B_Hero from '../Components/Business/B_Hero'
import B_SecondSec from '../Components/Business/B_SecondSec'
import Handing from '../Components/Business/Handing'
import B_TheredSec from '../Components/Business/B_ThredSec'
import B_FortSec from '../Components/Business/B_FourtSec'
import B_FifthSec from '../Components/Business/B_Fifth'
import B_Sixth from '../Components/Business/B_Sixth'
import B_Seven from '../Components/Business/B_SevenSec'
import B_Eight from '../Components/Business/B_Eight'
import B_Nine from '../Components/Business/B_Nine'
import Getstart from '../Components/Getstarted/Getstart'

const Business = () => {
  const[showlogin,setShowlogin]= useState(false);

  return (
    <>
        {showlogin?<Getstart setShowlogin={setShowlogin}/>:<></>}

         <div>
         <Header setShowlogin={setShowlogin}/>
      
        
          <B_Hero/>
          <B_SecondSec/>
          <B_TheredSec/>
          
          <B_Seven/>
          </div> 
          <div>
          {/* <Handing/> */}
         
          
          </div>
          
          <B_FifthSec/>
          <B_Eight/>
          <B_Nine/>
          {/* <B_FortSec/> */}
          {/* <B_Sixth/> */}
        <div >
        <Footer/>
        </div>
         
    </>
  )
}

export default Business