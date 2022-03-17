import React from 'react'
import './ContactMe.css'

export default function ContactMe() {
  return (
      <div className='container'>
          <form>
              <h3>ContactMe</h3>
              <input type="text" id='name' placeholder='Enter Your Name' required />
              <input type="email" id='email' placeholder='Enter Your Email Id' required />
              <input type="text" id='phone' placeholder='Enter Your Phone Number' required />
              <textarea id='message' rows="5" placeholder='How Can We Help You?'></textarea>
              <button type='submit'>Send Message</button>
          </form>
          
      </div>
  )
}
