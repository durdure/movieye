import React from 'react'
import Alien from "./alien.png"
import "./About.css"

const About = () => {
  return (
    <section className='section_about'>
        <div className='image_about'>
            <img src={Alien} alt=''/>
        </div>
        <div className='content_about'>
            <h2>About Us</h2>
            <span></span>
            <p>
                We are a team of developers who are passionate about creating a better world through technology. 
                We believe that technology is a powerful tool that can be used to solve many of the world's problems. 
                Our mission is to create innovative solutions that make a positive impact on people's lives. 
                We are committed to using our skills and expertise to build a better future for all.
            </p>
            <ul className='link_about'>
                <li><a href="#">Work</a></li>
                <div className='vertical_line'></div>
                <li><a href="#">Service</a></li>
                <div className='vertical_line'></div>
                <li><a href="./contact">contact</a></li>
            </ul>
            <ul className='icons_about'>
                <li><a href="https://www.facebook.com/jaki.jim.902"><i class="fab fa-facebook-f facebook-bg"></i></a></li>
                <li><a href="https://twitter.com/DureEshe29667"><i class="fab fa-twitter twitter-bg"></i></a></li>
                <li><a href="https://github.com/durdure"><i class="fab fa-github"></i></a></li>
            </ul>


        </div>
    </section>
  )
}

export default About