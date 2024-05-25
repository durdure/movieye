import React from 'react'
import './header.css'

const Header = () => {
  return (
    <nav className='nav'>
      <a href="#" className="nav_brand">
        Movieye</a>
      <ul className='nav_menu'>
        <li className='nav_item'>
          <a href="#" className='nav_link'>
            Home</a>
        </li>
        <li className='nav_item'>
          <a href="#" className='nav_link'>
            About</a>
        </li>
        <li className='nav_item'>
          <a href="#" className='nav_link'>
            latest
          </a>
        </li>
        <li className='nav_item'>
          <a href="#" className='nav_link'>
            Contact
            </a>
        </li>
      </ul>
      <div className="nav_toggle">
        <div className='line_1'></div>
        <div className='line_2'></div>
        <div className='line_3'></div>
      </div>
    </nav>
  )
}

export default Header