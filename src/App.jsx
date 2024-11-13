 import React from 'react'
 import './App.css'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components import
import Header from './Components/Header'

// Screen
 import Business from './Screens/Business'
 import About from './Screens/About'
 import Contact  from './Screens/Contact'
import Home from './Screens/Home'
import Careers from './Screens/Careers'


 
 const App = () => {
   
 
   return (
     <div>
       {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='business' element={<Business/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='careers' element={<Careers/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
     </div>
   )
 }
 
 export default App