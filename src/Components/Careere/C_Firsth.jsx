import React from 'react'
import '../../Css/Careere/C_Firsth.css'

const C_Firsth = (props) => {
  const {h1,p1,p2,p3,bt1,bt2,bt3,bt4,bt5} = props
  return (
    <div> 
    <div className='c-first'>
        <div className='c-main-first'>
            <div className='c-first-handing'>
                <h1>{h1}</h1>
                <p>{p1}</p>
            </div>
            <div className='c-first-right'>
                <div className='c-right-item-one'>
                <p>{p2}</p>
                <p>{p3} </p>
                </div>
                <div className='c-right-item-two'>
                 <button>{bt1} </button>
                 <button>{bt2} </button>
                 <button>{bt3} </button>
                 <button>{bt4} </button>
                 <button>{bt5}</button>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default C_Firsth