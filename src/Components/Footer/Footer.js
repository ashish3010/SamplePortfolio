import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Ashish</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
      <a href="https://www.facebook.com/profile.php?id=100016992769448"><FaFacebookF /> </a>
        <a href="https://twitter.com/im_ashish30"><BsTwitter/> </a>
        <a href="https://www.instagram.com/im_ashish30/"><BsInstagram/> </a>
        <a href="https://github.com/ashish3010"><FaGithub/> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Ashish Mishra. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer 