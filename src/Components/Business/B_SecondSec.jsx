import React from 'react'
import '../../Css/Business/B_Second.css'
import { LuRefreshCcw } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { GiNetworkBars } from "react-icons/gi";
    

const B_SecondSec = () => {
  return (
    <>
        <div className='b-second'>
        <div className='b-main-second'>
            <div className="b-main-second-left">
                <img src="https://maticz.com/assets/images/trustwallet/trust_5.webp" alt="" />
            </div>
            <div className="b-main-second-right">
                <p>Accept CashlessPay</p>
                <h2>Boost sales
                with CashlessPay</h2>
                <p>ap into a loyal network of millions of shoppers who use CashlessPay’s wallet as their preferred payment method.</p>
                <button> Learn more</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default B_SecondSec