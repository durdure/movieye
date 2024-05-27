import React from 'react'
import './footer.css'
import Logo from "./logomain.png"


const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='coloumn' id='company'>
            <img src= {Logo} alt="" className='logo'/>
            <p>
              Movieye is a platform where you can find all the latest movies, tv shows and web series.
            </p>
            <div className='social'>
              <a href="#" className='social_link'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href="#" className='social_link'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href="#" className='social_link'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href="#" className='social-link'>
                <i className='fab fa-youtube'></i>
              </a>
              <a href="#" className='social-link'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
          <div className='coloumn' id='services'>
            <h2>Services</h2>
            <div className='link'>
              <a href='#'>Movies</a>
              <a href='#'>Tv Shows</a>
              <a href='#'>Web Series</a>
              <a href='#'>Trailers</a>
            </div>
          </div>
          <div className='coloumn' id='contact'>
          <h2>Contact Us</h2>
         <div className="contact-detail">
          <i className='fa fa-location'></i>
          <p>1000, AASTU, Addis Ababa, Ethiopia</p>
         </div>
         <div className="contact-detail">
          <i className='fa fa-phone'></i>
          <p>+251 911 111 111</p>
         </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer