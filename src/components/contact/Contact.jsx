import React from 'react'
import './contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setResult('Sending...')
    formData.append("access_key", "964665b0-58c8-4fef-8b88-b09c17c93435");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();
      if (data.success) {
        setResult('Form sent successfully!');
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message)
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

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
          <form onSubmit={onSubmit}>
            <h2 className='form-tilte'>Send Us Message</h2>
            <div className='form-felds'>
              <div className='form-group'>
                <input type="text" name="first_name" className='fname' placeholder='First Name' required />
              </div>
              <div className='form-group'>
                <input type="text" name="last_name" className='lname' placeholder='last Name' required />
              </div>
              <div className='form-group'>
                <input type="email" className='emain' placeholder='Email' required />
              </div>
              <div className='form-group'>
                <input type="number" name="phone" className='phone' placeholder='Phone Nuber' required/>
              </div>
              <div className='form-group'>
                <textarea name="message"  placeholder='Write Your Message' required></textarea>
              </div>
            </div >
            <input type="submit" value= 'Send Message' className='submit-btn'/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact