import React, { useState } from "react"
import "./header.css"
import logo from '../../images/logomain.png'

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>

        <div className='logo'>
              <img src= {logo} alt='' />
              <h1>Movieye</h1>
         </div>

            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                <a href='/home'>Home</a>
                <a href='/series'>Series</a>
                <a href='/movies'>Movies</a>
                <a href='/pages'>Pages</a>
                <a href='/pricing'>Pricing</a>
                <a href='/contact'>Contact</a>
              <span></span>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>

          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Log in</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header