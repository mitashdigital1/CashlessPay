import React from 'react'

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
// import Business from './Business'
import Careers from './Careers'
 
 

const Home = () => {
  return (
    <div>
     
     <Header/>
     <HeroSec/>

     {/* <SecondSec/> */}
     {/* <ThredSec/>  */}



     <ForthSec/>
     <FifthSec/>
     <SixthSec/>
     <SevenSec/>


     {/* <VideoSec/>  */}
     <FooterSec/> 
     
     

   </div>
  )
}

export default Home