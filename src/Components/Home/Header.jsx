import React, { useState } from 'react'
import Hero from './Hero_Section'
import './Header.css'
import Logo from '../../assets/Your paragraph text.png'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import indonesiaflag from "..//../assets/flags/indonesia-flag.png"
import australiaflag from "..//../assets/flags/australia.png"
import cambodiaflag from "..//../assets/flags/cambodia.png"
import malaysiaflag from "..//../assets/flags/malaysia.png"
import myanmarflag from "..//../assets/flags/myanmar.png"
import newzealandflag from "..//../assets/flags/NewZealand.png"
import philippinesflag from "..//../assets/flags/Philippines.png"
import singaporeflag from "..//../assets/flags/singapore.png"
import thailandflag from "..//../assets/flags/thailandflag.png"
import vietnamflag from "..//../assets/flags/vietnam.png"

const Header = () => {
  const [mobileItem, setMobileItem] = useState(false)
  const Clicked = () => {
    setMobileItem(!mobileItem)

  }

  return (
    <>
      <div className='nav'>
        <div className='navbar'>
          <div className="nav-left-logo">
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={mobileItem ? 'mobile-item mobile-items ' : ' nav-center-item'}>
            <ul className=' dropdown mobile-items' >
              <li className="dropbtn"><Link to='/'>PersonalPay</Link></li>

              <li><Link to="/businesspay">BusinessPay</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>





          <div className="nav-right-item">
            <div className='first-item'>
              <div className="dropdown-en">
                <img src={australiaflag} loading="eager" alt="" class="icon" />
                <p className="dropbtn-en">EN</p>
                <div className="dropdown-content">

                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={indonesiaflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Bahasa</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={australiaflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">English</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={cambodiaflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Khmer</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={malaysiaflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Malay</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={myanmarflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Burmese</div>
                    </a>
                  </div>
                  {/* <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={newzealandflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">English</div>
                    </a>
                  </div> */}
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={philippinesflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Filipino</div>
                    </a>
                  </div>
                  {/* <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={singaporeflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">English</div>
                    </a>
                  </div> */}
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={thailandflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Thai</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={vietnamflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Vietnamese</div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className='btn'>
              <button>DOWNLOAD APP</button>
            </div>
            <IoMenu onClick={Clicked} className='menu' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
