import React from 'react'
import './footer.css'
import {BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akshay</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Education</a></li>
        <li><a href="#project">Worked For</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.facebook.com/profile.php?id=100008262978496" target="blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/_akchya_/" target="blank"><BsInstagram/></a>
        <a href="https://twitter.com/Akchvn" target="blank"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/akshay-chavan-84421a17a/" target="blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Akshay Chavan. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
