import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/akshay-chavan-84421a17a/" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/Akchya?tab=repositories" target="blank"><BsGithub /></a>
      <a href="https://www.instagram.com/_akchya_/" target="blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
