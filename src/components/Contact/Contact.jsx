import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
        
        <h1>Contact Me</h1>
        <div className='contact'>
            <div className='talk'>
                <h4>Let's Talk</h4>
                <p>I'm currently available to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='details'><MdEmail /><p>Ashishyter@gmail.com</p></div>
                <div className='details'><IoCall /><p>9140661036</p></div>
                <div className='details'><FaLocationDot /><p>Uttar Pradesh, India</p></div>
            </div>
          
            <form className='form'>
                <label htmlFor="name">Your Name</label><br />
                <input type="text" placeholder='Enter your name' id='name'/><br />

                <label htmlFor="email">Your Email</label><br />
                <input type="email" placeholder='Enter your email' id="email" /><br />

                <label htmlFor="message">Write your message here</label><br />
                <textarea placeholder='Enter your message' id="message"></textarea><br />

                <button type='submit'>Submit</button>
            </form>
          
        </div>
      
    </div>
  )
}

export default Contact
