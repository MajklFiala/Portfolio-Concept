import React from 'react'
import '../CSS/Contact.css'
import contactImage from '../Images/contact-img1.svg'

function Contact() {



  return (
    <div className='contactContainer' id='contact'>
        <div className='Left'>
            <img src={contactImage}></img>
        </div>
        <div className='Right'>
            <div>
                <h1>Get In Touch</h1>
            </div>
            <div className='inputDiv'>
                <textarea placeholder='First Name' ></textarea>
                <textarea placeholder='Last Name'></textarea>
            </div>
            <div className='inputDiv'>
                <textarea placeholder='Email Address'></textarea>
                <textarea placeholder='Phone Number'></textarea>
            </div>
            <div className='inputDivM'>
                <textarea placeholder='Message' className='MessageInput'></textarea>
            </div>
            <div>
                <button>SUBMIT</button>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
