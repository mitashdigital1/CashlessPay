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
            <div className="second-box">
                <p><SlEnergy /></p>
                <p>Settle your
                funds faster</p>
                <span>Receive payments instantly from your global customers and access your funds quickly. Save on fees and improve your cash flow with Blaze.</span>
            </div>

          

            <div className="second-box b-box-second">
                <p><LuRefreshCcw /></p>
                <p> Pay your vendors
                anywhere</p>
                <span>Seamlessly send money to vendors worldwide. Spend less time on payments and more time on your business.</span>
            </div>
            <div className="second-box">
                <p><GiNetworkBars /></p>
                <p> Manage your
                revenue with ease</p>
                <span>
                Easily track your revenue, send payment links, and stay updated on your business finances with our intuitive dashboard.
                </span>
            </div>
        </div>
        </div>
    </>
  )
}

export default B_SecondSec