import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../CSS/Home/Hero.module.css'
import Img1 from '../../Image/Banner/poster_1.png'
import Img2 from '../../Image/Banner/poster_2.png'
import Img3 from '../../Image/Banner/poster_3.png'


const Posters = [
    {
        id: 1,
        img: Img1,
        text: 'The Wind Rises',
        link: '/anime/5', 
        isCenter: false
    },
    {
        id: 2,
        img: Img2,
        text: 'Spirited Away',
        link: '/anime/12',
        isCenter: true
    },
    {
        id: 3,
        img: Img3,
        text: 'Only Yesterday',
        link: '/anime/18',
        isCenter: false
    }
]

const Hero = () => {

  return (
    <section id="home" className={styles['hero-section']}>
      <div className={styles.container}>
        <div className={styles['container-hero']}>
          <div className={styles['poster-row']}>
            {Posters.map((poster) => (
              <div 
                className={`${styles['poster-card']} ${poster.isCenter ? styles['poster-card-center'] : ''}`} 
                key={poster.id}
              >
                <Link to={poster.link} className={styles['poster-link']}>
                  <div className={styles['poster-container']}>
                    <svg viewBox="0 0 400 50" className={styles['poster-title-top']}>
                      <path id={`curve-top-${poster.id}`} d="M 50,40 Q 200, -60 350,40" fill="transparent"/>
                      <text className={styles['curved-text']}>
                        <textPath href={`#curve-top-${poster.id}`} startOffset="50%" textAnchor="middle">
                          {poster.text}
                        </textPath>
                      </text>
                    </svg>
                    
                    <div className={styles.poster}>
                      <img src={poster.img} alt={poster.text} className={styles['img-poster']} />
                    </div>
                    
                    <svg viewBox="0 0 400 50" className={styles['poster-title-bottom']}>
                      <path id={`curve-bottom-${poster.id}`} d="M 50,10 Q 200, 100 350,10" fill="transparent" />
                      <text className={styles['curved-text']}>
                        <textPath href={`#curve-bottom-${poster.id}`} startOffset="50%" textAnchor="middle">
                          {poster.text}
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero