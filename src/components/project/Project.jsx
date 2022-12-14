import React from 'react'
import './project.css'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Project = () => {
  return (
    <section id='project'>
      <h5>Worked on</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <article className='project'>
          <div className="project__head">
            <h3>Wolverine World Wide</h3>
            <p className='project__period'>April-2021 - Present</p>
          </div>
          <ul className="project__list">
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>The shoemaker is known for its eponymous brand, Wolverine Boots and Shoes, as well as other brands, such as Hush Puppies and Merrell.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>I was part of both the Development and Manage service (24*7) team.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>I was part of the Enhancement team, Which Provides the expected service regarding feature development and maintaining an e-Commerce Website as per the client's requirement.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>Handling bugs, resolving conflicts, and maintaining code-base with business practice.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>I was also part of the Manage Service Team, which provides technical support to Wolverine Team for any issues related to the product, pricing, campaign, promotion, banners, etc by configuring necessary changes in the Business manager (Demandware).</p>
            </li>
          </ul>
        </article>

        <article className='project'>
          <div className="project__head">
            <h3>Cubical-Code (Web Developer Intern)</h3>
            <p className='project__period'>March-2019 - December-2019</p>
          </div>
          <ul className="project__list">
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>I was working on the ongoing project which was about a website for a local Caffe/restaurant.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>Developed user interface with modern design, JavaScript framework, HTML5, and CSS3, which improved user satisfaction.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>Worked closely with Senior Developers, Designers, Copywritters, Testers and other Cross-functional teams to drive an absolute result.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>Worked on Accessibility on the web pages to maintain legal ethics and drive improvement towards the people with disabilities. Learned multiple threding, concurrency, design pattern and their impact on application.</p>
            </li>
            <li>
              <BsFillCaretRightFill className='project__list-icon' />
              <p>Worked parallelly with Testing team to document the test-process and test-cases to understand the architectural flow.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Project
