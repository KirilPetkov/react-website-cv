import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
           <MdOutlineMail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>kirilp245@gmail.com</h5>
           <a href="mailto:kirilp24@abv.bg" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
           <BsMessenger className='contact__option-icon'/>
           <h4>Messenger</h4>
           <h5>Facebook | Kiril Petkov</h5>
           <a href="http://m.me/KoinPetkov" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
           <AiOutlineWhatsApp className='contact__option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+44 7442 322170</h5>
           <a href="https://api.whatsapp.com/send?phone+447442322170" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact