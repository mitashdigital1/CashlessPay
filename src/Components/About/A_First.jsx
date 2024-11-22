import React from 'react'
import '../../Css/About/A_First.css'
import { useNavigate } from 'react-router-dom'
const A_First = () => {
  const navigate = useNavigate();
  return (
    <div className='a-first'>
      <div className='a-main-first'>
        <div className='a-first-item'>
          <h1>About US</h1>
          <p><span id='cashlesspay'>At CASHLESSPAY</span>we believe everyone should have complete control over their finances. Our platform is designed with flexibility and customer empowerment at its core, giving you the freedom to manage your money on your terms. Whether you’re sending funds internationally or handling business transactions, CASHLESSPAY is here to make financial control accessible, easy, and reliable for everyone.</p>
          <div className='input-box'>
            <input type="email" placeholder='Your work email' />
            <button onClick={()=>navigate("/contactus@cashlesspay.co")} >Contact Us</button>
          </div>
        </div>
        {/* <div className='a-image'>
          <img src="https://watermark.lovepik.com/photo/20211208/large/lovepik-forest-road-highway-picture_501669995.jpg" alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default A_First