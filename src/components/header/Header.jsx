import React, { useState } from "react"
import "./header.css"
import logo from './logo.png'

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
        <div className='logo'>
              <img src= {logo} alt='' />
         </div>
          <nav className='flexSB'>
            
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/home'>Home</a>
              </li>
              <li>
                <a href='/series'>Series</a>
              </li>
              <li>
                <a href='/movies'>Movies</a>
              </li>
              <li>
                <a href='/pages'>Pages</a>
              </li>
              <li>
                <a href='/pricing'>Pricing</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header