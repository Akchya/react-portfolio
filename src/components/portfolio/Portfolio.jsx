import React from 'react'
import './portfolio.css'
import {IoSchoolSharp} from 'react-icons/io5'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>About My</h5>
      <h2>Education</h2>
        <div className="container portfolio__container">
            <div className="portfolio__cards">
              <div className="portfolio__card">
                <IoSchoolSharp className='portfolio__icon'/>
                <div>
                  <h2>2016 - 2020</h2>
                  <h3>Bachelor of Engineering (Computer Science)</h3>
                  <h4>KLE's KLE College of Engineering and Technology</h4>
                </div>
              </div>
              <div className="portfolio__card invert">
                <IoSchoolSharp className='portfolio__icon'/>
                <div>
                <h2>2014 - 2016</h2>
                  <h3>Bachelor of Engineering (Computer Science)</h3>
                  <h4>KLE's KLE College of Engineering and Technology</h4>
                </div>
              </div>
              <div className="portfolio__card">
                <IoSchoolSharp className='portfolio__icon'/>
                <div>
                <h2>2005 - 2014</h2>
                  <h3>Bachelor of Engineering (Computer Science)</h3>
                  <h4>KLE's KLE College of Engineering and Technology</h4>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
