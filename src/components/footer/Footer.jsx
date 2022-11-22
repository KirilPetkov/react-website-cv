import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
     <a href="#" className='footer__logo'>Kiril Petkov</a>

     <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contacts">Contact</a></li>
     </ul>

     <div className="footer__socials">
      <a href="https://www.facebook.com/KoinPetkov"><AiFillFacebook/></a>
      <a href="https://www.instagram.com/_kiril_petkov_x/"><AiOutlineInstagram/></a>
      <a href="https://twitter.com/KoinPetkov"><AiFillTwitterCircle/></a>
     </div>

     <div className="footer__copyright">
      <small>&copy; Kiril Petkov 2022 All rights reserved</small>
     </div>
    </footer>
  )
}

export default Footer