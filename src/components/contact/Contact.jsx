import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='section-wrapper'>
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">
            Contact Information
          </h2>
          <h3 className="info-subtitle">
              Fill up the form and our team will get back to you within 24Hours 
          </h3>

          <ul className="info-details">
            <li>
              <i className='fas fa-phone-alt'></i>
              <span>Phone:</span> <a href="+251993018443">+251993018443</a>
            </li>
            <li>
              <i className='fas fa-paper-plane'></i>
              <span>Email:</span><a href="duresaeshetu2001@gmail.com">duresaeshetu2001@gmail.com</a>
            </li>
            <li >
              <i className='fas fa-website'></i>
              <span>Webseite:</span> <a href="#">https://movieye.vercel.app</a>
            </li>
          
          </ul>


          <ul className='social-icons'>
            <li>
              <a href="#">
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="form-wrapper">
          <form action="#" method='POST'>
            <h2 className='form-tilte'>Send Us Message</h2>
            <div className='form-felds'>
              <div className='form-group'>
                <input type="text" className='fname' placeholder='First Name' />
              </div>
              <div className='form-group'>
                <input type="text" className='lname' placeholder='last Name' />
              </div>
              <div className='form-group'>
                <input type="email" className='emain' placeholder='Email' />
              </div>
              <div className='form-group'>
                <input type="number" className='phone' placeholder='Phone Nuber' />
              </div>
              <div className='form-group'>
                <textarea name="" placeholder='Write Your Message'></textarea>
              </div>
            </div >
            <input type="submit" value= 'Send Message' className='submit-button'/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact