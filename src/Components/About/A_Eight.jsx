import React from 'react'
import '../../Css/About/A_Eight.css'
import { useNavigate } from 'react-router-dom'
const A_Eight = () => {
  const navigate = useNavigate();
  return (
    <div className='a-eight'>
        <div className='a-main-eight'>
            <div className='a-eight-item'>
            <h1>Ready to Join the Journey?</h1>
                <p>Be a part of CASHLESSPAY’s mission to redefine global financial freedom. Let’s create a world where borders don’t limit opportunity. Join us on this exciting journey!</p>
                <button onClick={()=>navigate("/careers")} >Join the team</button>
            </div>
        </div>
    </div>
  )
}

export default A_Eight