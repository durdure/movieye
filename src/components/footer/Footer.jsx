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
            <ul>
              <li>
                <a href='#'>Movies</a>
              </li>
              <li>
                <a href='#'>Web Series</a>
              </li>
              <li>
                <a href='#'>Tv Shows</a>
              </li>
              <li>
                <a href='#'>Upcoming Movies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='coloumn' id='contact'>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              <span> 1000, AASTU, Addis Ababa, Ethiopia</span>
            </li>
            <li>
              <span>
                <i className='fas fa-phone'></i>
              </span>
              <span> +251 993018443</span>
            </li>
            <li>
              <span>
                <i className='fas fa-envelope'></i>
              </span>
              <span> duresaeshetu2001@gmail.com</span>
            </li>    
          </ul>  
        </div>







      </div>
    </footer>
  )
}

export default Footer