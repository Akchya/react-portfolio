import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.png'
import {FaAward, FaGamepad} from 'react-icons/fa'
import {BsFileCodeFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years in Front-End</small>
            </article>
            <article className="about__card">
              <BsFileCodeFill className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Projects Done</small>
            </article>
            <article className="about__card">
              <FaGamepad className='about__icon'/>
              <h5>Interest</h5>
              <small>LAN Games(BGMI)</small>
            </article>
          </div>

          <p>
            Enthusiastic SFCC Front-End Developer with 2 Years of experience eager to contribute to team sucess through hard work, attention to detail and excellent organizational skills. Quick learner with problem solving skills, good experience in Teamwork and Cooperation.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
