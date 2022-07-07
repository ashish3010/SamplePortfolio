import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'


const Testimonials = () => {

  const data = [
    {
      id: 1,
      image: AVTR1,
      name: 'Ernest Achiever',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium eos iste sapiente doloribus quia doloremque optio iure assumenda incidunt.'
    },
    {
      id: 2,
      image: AVTR2,
      name: 'Ernest Achiever',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium eos iste sapiente doloribus quia doloremque optio iure assumenda incidunt.'
    },
    {
      id: 3,
      image: AVTR3,
      name: 'Ernest Achiever',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium eos iste sapiente doloribus quia doloremque optio iure assumenda incidunt.'
    },
    {
      id: 4,
      image: AVTR4,
      name: 'Ernest Achiever',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium eos iste sapiente doloribus quia doloremque optio iure assumenda incidunt.'
    },
  ]

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
      modules={[Pagination]} 
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({id, image, name, review}) =>{
            return(
              <SwiperSlide key={id} className="testimonial">
                <div className="client-avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className="client-name">{name}</h5>
                <small className="client-review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials  