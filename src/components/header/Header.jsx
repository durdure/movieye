import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <h3>Movieye</h3>
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'
          style={
            {
              color: "#fff",
              cursor: "pointer",
              padding: "0px",
              display: "flex",
            }
          }
          >
            <a href="/singlepage" style={
              {
                color: "#fff",
                cursor: "pointer",
                padding: "0px",
                margin: "0px",
                display: "flex",
              }
            }>
              <i className='fa fa-search'></i>
            </a>
            <a href="./siglepage" style={
              {
                color: "#fff",
                cursor: "pointer",
                padding: "0px",
                margin: "0px",
                display: "flex",
              }
            }>
            <i class='fas fa-bell'></i>

            </a>
            <a href="./" style={
              {
                color: "#fff",
                cursor: "pointer",
                padding: "0px",
                margin: "0px",
                display: "flex",
              }}><i className='fas fa-user' ></i></a>
            
           
            
            <button>
              <a href="./login">LogIn</a>
              </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header