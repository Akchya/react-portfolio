import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Akshay Chavan</h1>
        <h2 className="text-light">Salesforce Commerce Cloud Developer</h2>
        <CTA />
        <HeaderSocials />
        
        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
