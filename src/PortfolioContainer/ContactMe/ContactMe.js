import React from 'react'
import './ContactMe.css'
import emailjs from 'emailjs-com'

export default function ContactMe() {
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_5mue3ij', 'template_3lupsql', e.target,"1KaRrTPk_CU6A7_O7").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        e.target.reset();
        alert("Message Sent Successfully")
    }
  return (
      <div className='contactContainer'>
          <form onSubmit={sendEmail}>
              <h3>ContactMe</h3>
              <input type="text" name='name' placeholder='Enter Your Name' required />
              <input type="email" name='email' placeholder='Enter Your Email Id' required />
              <input type="text" name='phone' placeholder='Enter Your Phone Number' required />
              <textarea name='message' rows="5" placeholder='How Can We Help You?'></textarea>
              <button type='submit'>Send Message</button>
          </form>
          
      </div>
  )
}
