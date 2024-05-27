import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='seci aboutUs'>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic laborum quis, a iure error? Autem soluta o
            mnis dolorem nobis velit a facilis obcaecati laboriosam
             architecto, natus possimus recusandae quia.</p>
          <ul className="section">
          <li><a href=""><i className='fab fa-facebook'></i></a></li>
          <li><a href=""><i className='fab fa-twitter'></i></a></li>
          <li><a href=""><i className='fab fa-instagram'></i></a></li>
          <li><a href=""><i className='fab fa-youtube'></i></a></li>
        </ul>
        </div>
        <div className='seci quickLink '>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className='seci contact'>
          <h2>Contact Info</h2>
          <ul>
            <li>
              <span><i className='fas fa-map-marker-alt'></i></span>
              <span>123 Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            </li>
            <li>
              <span><i className='fas fa-phone'></i></span>
              <span>123-456-7890</span>
            </li>
            <li>
              <span><i className='fas fa-envelope'></i></span>
              <span>inbox</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer