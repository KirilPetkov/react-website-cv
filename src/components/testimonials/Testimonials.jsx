import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/u.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/linked.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
            <h5 className='client__name'>IT Career Swap</h5>
            <small className='client__review'>"Clean and commented code, beautiful design, and really not hard to work with."</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Udemy</h5>
            <small className='client__review'>"If you need a programmer, get this one."</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Linkedin Learning</h5>
            <small className='client__review'>"Kiril Petkov meets our needs perfectly."</small>
        </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials