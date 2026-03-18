import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../CSS/Catalog/CatalogHero.module.css'
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
    <section id="catalog-hero" className={styles['catalog-hero-section']}> 
      <div className={styles['bg-container']}>
        <div></div>
          <div className={styles['catalog-container-hero']}>
            
            <div className={styles['catalog-corner-container']}>
              
              <div className={styles['catalog-vertical-lines-container']}>
                <div className={`${styles['catalog-vertical-line']} ${styles['left-line']}`}>
                  <img src={Studio} alt="" className={styles['catalog-pattern']}/>
                </div>
                
                <div className={styles['catalog-poster-row']}>
                  {Poster.map((poster) => (
                    <Link to={poster.link} key={poster.id}>
                    
                      <div className={styles['catalog-poster-card']}>
                        <div className={styles['catalog-poster-container']}>
                          <div className={styles['catalog-poster']}>
                            <img src={poster.img} alt={poster.text} className={styles['catalog-img-poster']} />
                          </div>
                        </div>
                      </div>
                      </Link>
                  ))}
                </div>
                
                <div className={`${styles['catalog-vertical-line']} ${styles['right-line']}`}>
                  <img src={Ghibli} alt="" className={styles['catalog-pattern-right']}/>
                </div>
              </div>
              
            </div>

          </div>
      </div>
    </section>
  )
}

export default CatalogHero