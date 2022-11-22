import React from 'react'
import './about.css'
import ME from '../../assets/mypic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
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
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>20+ Worldwide</small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>50+ Completed</small>
          </article>
         </div>
         <p>
          I began learning the fundamentals of web development early 2019. 
          I strongly believe in personal growth and with my competitive nature, found myself looking for a career where I'd constantly be challanged in order to improve.
         </p>
         <br>
         </br>
         <p>
          I look forward to expanding my knowledge in front end tech and the possibilities that will bring.
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About