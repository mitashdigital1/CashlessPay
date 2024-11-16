import React from 'react'
import '../../Css/About/A_Second.css'
import Second_Section from '../Home/Second_Section'

const A_Second = () => {
  return (
    <div>
        <div className='a-main-second'>
       <div className='a-second'>
        <div className="a-box-one a-bg-one">
            <h2>Global payments  </h2>
            <p>We ensure accessibility and inclusivity by accommodating multiple languages, currencies, and payment methods.</p>
        </div>
        <div className="a-box-one a-bg-two">
            <h2>Everyone is invited</h2>
            <p>We implement low-cost transactions, especially for cross-border payments, to encourage adoption.</p>
        </div>
        <div className="a-box-one a-bg-three">
            <h2>Enrich your journey</h2>
            <p>We help you discover new experiences and donate to local communities and charities.</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default A_Second