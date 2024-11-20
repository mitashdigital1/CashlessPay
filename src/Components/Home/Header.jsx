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
              {/* <div className="dropdown-en">
                <p className="dropbtn-en">Cn</p>
                <div className="dropdown-content">
                  <li className='region'><a href="#">SEA</a>
                    <ul className='second-dropdown-a'>
                      <li><a href="#">Indonesia
                      </a></li>
                      <li><a href="#">Thailand</a></li>
                      <li><a href="#">Vietnam</a></li>
                      <li><a href="#">Malaysia</a></li>
                      <li><a href="#">Philippines</a></li>
                      <li><a href="#">Singapore</a></li>
                      <li><a href="#">Myanmar</a></li>
                      <li><a href="#">Cambodia
                      </a></li>
                      <li><a href="#">Laos</a></li>
                      <li><a href="#">Brunei</a></li>
                      <li><a href="#">Timor-Leste</a></li>
                      <li><a href="#">East Timor</a></li>
                      <li><a href="#">Hong Kong</a></li>
                      <li><a href="#">Taiwan</a></li>
                      <li><a href="#">Papua New Guinea</a></li>
                    </ul>
                  </li>
                  <li className='region' ><a href="">AZN</a>
                    <ul className='second-dropdown-b'>
                      <li> <a href="#">Australia</a></li>
                      <li> <a href="#">New Zealand</a></li>
                      <li> <a href="#">Fiji</a></li>
                      <li> <a href="#">Papua New Guinea</a></li>
                      <li> <a href="#">Samoa</a></li>
                      <li> <a href="#">Tonga</a></li>
                      <li> <a href="#">Vanuatu</a></li>
                      <li> <a href="#">Solomon Islands</a></li>
                      <li> <a href="#">Cook Islands</a></li>
                      <li> <a href="#">Niue</a></li>
                      <li> <a href="#">Tuvalu</a></li>
                      <li> <a href="#">Kiribati</a></li>
                    </ul></li>
                </div>
              </div> */}
              <div className="dropdown-en">
                <p className="dropbtn-en">Language</p>
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
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={newzealandflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">English</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={philippinesflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">Filipino</div>
                    </a>
                  </div>
                  <div role="listitem" class="">
                    <a href="#" class="">
                      <img src={singaporeflag} loading="eager" alt="" class="icon" />
                      <div class="local-link">English</div>
                    </a>
                  </div>
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


                  {/* <ul >
                    <li className='listStyle' >

                      <img className='flagimage'
                        id="imgg" src={NewZealand} alt="loading..."></img>
                      <a href="#">English</a>
                    </li>
                    <li className='listStyle' >
                      <img className='flagimage' src={Indonesia} />
                      <a href="#">Bahasa Indonesia </a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Thailand} />
                      <a href="#">Thai</a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Vietnam} />
                      <a href="#">Vietnamese</a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Malaysia} />
                      <a href="#">Malay</a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Philippines} />
                      <a href="#">Pilipino </a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Singapore} />
                      <a href="#"> Mandarin  </a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Myanmar} />
                      <a href="#">Burmese</a></li>

                    <li className='listStyle'>
                      <img className='flagimage' src={Cambodia} />
                      <a href="#">Khmer</a></li>


                  </ul> */}


                  {/* <div role="list" class="locale-dropdown-list w-locales-items">
                    <div role="listitem" class="dropdown-link _w-icon is--locale w-locales-item">
                      <a href="#" aria-current="page" class="flex-in-dropdown is--locale w-inline-block w--current" tabindex="0">
                        <img src={indonesiaflag} loading="eager" alt="" class="icon" />
                        <div class="local-link">Bahasa</div>
                      </a>
                    </div>
                    <div role="listitem" class="dropdown-link _w-icon is--locale w-locales-item">
                      <a hreflang="es-AR" href="/es" class="flex-in-dropdown is--locale w-inline-block" tabindex="0">
                        <img src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f94fb122ef35120af021_spain.svg" loading="eager" alt="" class="icon" />
                        <div class="local-link">Thai</div></a>
                    </div><div role="listitem" class="dropdown-link _w-icon is--locale w-locales-item">
                      <a hreflang="pt-BR" href="/pt" class="flex-in-dropdown is--locale w-inline-block" tabindex="0">
                        <img src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f96c5b459c1e504cced8_brazil.svg" loading="eager" alt="Brazil" class="icon" />
                        <div class="local-link">Vietnamese</div></a>
                    </div>
                    <div role="listitem" class="dropdown-link _w-icon is--locale w-locales-item">
                      <a hreflang="da" href="/da" class="flex-in-dropdown is--locale w-inline-block" tabindex="0">
                        <img src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f95442b67649a75e0849_denmark.svg" loading="eager" alt="" class="icon" />
                        <div class="local-link">Malay</div></a>
                    </div>
                  </div> */}
                  {/* <a href="#" title="indonesia flag icons"><img src="\src\assets\flags\indonesia-flag.png" alt="" />Bahasa</a> */}
                  {/* <a href="#" aria-current="page" class="flex-in-dropdown is--locale w-inline-block w--current" tabindex="0"><img src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f94d604131c3d1309b25_united%20kingdom.svg" loading="eager" alt="United Kingdom" class="icon"></img><div class="local-link">English</div></a> */}
                  {/* <a href="#">English</a> */}
                  {/* <a href="#">Spanish</a> */}
                  {/* <a href="#">Portuguese</a> */}
                  {/* <a href="#">Danish</a> */}
                </div>
              </div>
              {/* <a href="#">En</a>
              <a href="#">Es</a> */}
              {/* <form>
                 <select>
                  <option value="Select your language">En</option>
                  <option value="saab">A</option>
                  <option value="opel">B</option>
                  <option value="audi">C</option>
                </select>
                
                  <select  >
                    <option value="Select your location">Es</option>
                    <option value="saab">A</option>
                    <option value="opel">B</option>
                    <option value="audi">C</option>
                  </select>
             
                  </form> */}
            </div>
            <div className='btn'>
              <button>DOWNLOAD APP</button>
            </div>
            {/* <i onClick={Clicked} id='hammenu' className="ri-menu-line"></i> */}
            <IoMenu onClick={Clicked} className='menu' />
            {/* drop down */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
