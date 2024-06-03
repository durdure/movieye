import React from 'react'
import "./login.css"

const Loginform = () => {
  return (
    <div className='login-wrapper'>
        <form action="#" className='registration'>
            <h2>LogIn</h2>
            <div className='input-field'>
                <input type="text" />
                <label>Enter Your Email</label>
            </div>
            <div className='input-field'>
                <input type="password" />
                <label >Enter Your Password</label>
            </div>
            <div className="forget">
                <label for="remeber">
                    <input type="checkbox" id="remeber" />
                    <span>Remember Me</span>
                </label>
                <a href="#">Forget Password?</a>
            </div>


            <button type='submit'>Log In</button>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
        </form>
    </div>
  )
}

export default Loginform