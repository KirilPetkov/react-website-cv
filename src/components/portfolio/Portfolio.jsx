import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.jpg'
import IMG2 from '../../assets/nftimg.jpg'
import IMG3 from '../../assets/pic9.jpg'
import IMG4 from '../../assets/pic4.jpg'
import IMG5 from '../../assets/pic5.jpg'
import IMG6 from '../../assets/pic6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG1} alt="" />
      </div>
      <h3>GitHub</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>Profile</a>
      <a href="https://github.com/KirilPetkov?tab=repositories" className='btn btn-primary' target='_blank'>Last Project</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG2} alt="" />
      </div>
      <h3>SellRoma</h3>
      <div className="portfolio__item-cta">
      <a href="https://www.sellroma.com/" className='btn' target='_blank'>Website</a>
      <a href="https://www.sellroma.com/signup.html" className='btn btn-primary' target='_blank'>Sign Up</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG3} alt="" />
      </div>
      <h3>YouTube</h3>
      <div className="portfolio__item-cta">
      <a href="https://www.youtube.com/user/kirenceto1245/featured/" className='btn' target='_blank'>Subscribe</a>
      <a href="https://www.youtube.com/user/kirenceto1245/featured/" className='btn btn-primary' target='_blank'>Last Video</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG4} alt="" />
      </div>
      <h3>eBooks</h3>
      <div className="portfolio__item-cta">
      <a href="https://www.amazon.com/" className='btn' target='_blank'>Buy Now</a>
      <a href="https://www.amazon.com/" className='btn btn-primary' target='_blank'>Amazon</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG5} alt="" />
      </div>
      <h3>Twitch</h3>
      <div className="portfolio__item-cta">
      <a href="https://www.twitch.tv/donkir4ou/" className='btn' target='_blank'>Follow</a>
      <a href="https://www.twitch.tv/donkir4ou/videos/" className='btn btn-primary' target='_blank'>Live</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG6} alt="" />
      </div>
      <h3>Krushovene</h3>
      <div className="portfolio__item-cta">
      <a href="https://www.facebook.com/profile.php?id=100063698672330&is_tour_dismissed=true/" className='btn' target='_blank'>Facebook</a>
      </div>
      </article>
      </div>
    </section>
  )
}

export default Portfolio