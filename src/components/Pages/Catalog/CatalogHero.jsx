import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Catalog/CatalogHero.css'
import Img1 from '../../Image/Banner/poster-7.png'
import Img2 from '../../Image/Banner/poster-8.png'
import Img3 from '../../Image/Banner/poster-9.png'
import Img4 from '../../Image/Banner/poster-10.png'
import Ghibli from '../../Image/Pattern/Ghibli.png'
import Studio from '../../Image/Pattern/Studio.png'

const Poster = [
  {
    id:1,
    img: Img1,
    text:'The Cat Returns',
    link: '/anime/11',
  },
  {
    id:2,
    img: Img2,
    text: "Kiki's Delivery Service",
    link: '/anime/19',
  },
  {
    id:3,
    img: Img3,
    text: 'Whisper Of The Heart',
    link: '/anime/14',
  },
  {
    id:4,
    img: Img4,
    text: 'My Neighbor Totoro',
    link: '/anime/21',
  },
]

const CatalogHero = () => {
  return (
    <section id="catalog-hero" className="catalog-hero-section"> 
      <div className='bg-container'>
        <div></div>
          <div className='catalog-container-hero'>
            
            <div className="catalog-corner-container">
              
              <div className="catalog-vertical-lines-container">
                <div className="catalog-vertical-line left-line">
                  <img src={Studio} alt="" className='catalog-pattern'/>
                </div>
                
                <div className='catalog-poster-row'>
                  {Poster.map((poster) => (
                    <Link to={poster.link}>
                    
                      <div className='catalog-poster-card' key={poster.id}>
                        <div className='catalog-poster-container'>
                          <div className='catalog-poster'>
                            <img src={poster.img} alt={poster.text} className='catalog-img-poster' />
                          </div>
                        </div>
                      </div>
                      </Link>
                  ))}
                </div>
                
                <div className="catalog-vertical-line right-line">
                  <img src={Ghibli} alt="" className='catalog-pattern-right'/>
                </div>
              </div>
              
            </div>

          </div>
      </div>
    </section>
  )
}

export default CatalogHero