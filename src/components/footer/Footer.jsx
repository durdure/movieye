import React from 'react'
import './footer.css'
import Logo from "./logomain.png"


const Footer = () => {
  return (
    <footer className="footer-section">
  
  
        <div className="container">
            <div className="footer-cta pt-5 pb-5">


                <div className="row1">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1000, AASTU, Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                    </div>
                  
                  
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+251993018443</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>duresaeshetu2001@gmail.com</span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
          
          
          
            <div className="footer-content pt-5 pb-5">
                <div className="row1">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                               <img src={Logo} alt="" />
                            </div>
                            <div className="footer-text">
                                <p>MOVIEYE is a powerful and user-friendly
                                     movie database application designed to help
                                      users discover, track, and review movies.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/jaki.jim.902"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://twitter.com/DureEshe29667"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="./about">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="./contact">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                          
                          
                            <div className="subscribe-form">
                                <form action="#">
                                  <input type="text" placeholder='Enter Email...' />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div className="copyright-area">
            <div className="container">
                <div className="row1">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer