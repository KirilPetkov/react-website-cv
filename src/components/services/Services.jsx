import React from 'react'
import './services.css'
import {BsShieldFillCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="service">
      <div className="service__head">
      <h3>UI/UX Design</h3>
      </div>

      <ul className='service__list'>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Design Based On User's Needs & Requirements</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Create Interface Useful</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>What To Achieve?</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Actions</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Create Interface Mind Aesthetically</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Prototyping</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>What To Make?</p>
      </li>
      </ul>
      </article>
      {/* END OF UI/UX */}
      <article className="service">
      <div className="service__head">
      <h3>Web Development</h3>
      </div>

      <ul className='service__list'>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Project Architecture</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Build Scripts</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>CI Integration</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Prototype Integration</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Standards & Best Practices</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Coding</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>W3C Compliance</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Cross Browser Compatibility</p>
      </li>
      </ul>
      </article>
      {/* WEB DEVELOPMENT */}
      <article className="service">
      <div className="service__head">
      <h3>Content Creation</h3>
      </div>

      <ul className='service__list'>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Content Strategy & Planning</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Research / Analysis</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Content Materials Organization</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Content Positioning</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Submit Initial Draft</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Media Release Review</p>
      </li>
      <li>
      <BsShieldFillCheck className='service__list-icon'/>
      <p>Distribution</p>
      </li>
      </ul>
      </article>
      {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services