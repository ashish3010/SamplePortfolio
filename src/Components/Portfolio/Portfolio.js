import React from 'react'
import './Portfolio.css'
import IMG1 from '../../images/portfolio1.jpg'
import IMG2 from '../../images/portfolio2.jpg'
import IMG3 from '../../images/portfolio3.jpg'
import IMG4 from '../../images/portfolio4.jpg'
import IMG5 from '../../images/portfolio5.png'
import IMG6 from '../../images/portfolio6.jpg'

const Portfolio = () => {

  const data =[
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Chart templates & infographics in Figma',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Maintaining tasks & tracking progress',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Charts templates & infographics in Figma',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crypto Currency Dashboard & Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribble.com'
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio 