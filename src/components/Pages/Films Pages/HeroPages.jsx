import React from 'react'
import styles from '../../CSS/Catalog/Films Pages/HeroPages.module.css'
import Top_Pattern from '../../Image/Pattern/Catelog Banner Top Pattern.png'
import Bottom_Pattern from '../../Image/Pattern/Catalog Banner Bottom Pattern.png'

const HeroPages = ({anime, heroTopPattern, heroBottomPattern}) => {
  return (
    <section id="home" className={styles.hero}> 
      <div className={styles['hero__bg-container']}>
       
        <div className={styles['hero__container']}>
          
          <div className={styles['hero__corner-wrapper']}>
            
            <div className={styles['hero__top-pattern']}>
              <img src={anime.heroTopPattern} alt="" className={styles['hero__pattern-image']}/>
            </div>

            <div className={styles['hero__content']}>
              <div className={styles['hero__poster']}>
                <img src={anime.poster} alt="" className={styles['hero__poster-image']}/>
              </div>

              <div className={styles['hero__description']}>
                <ul className={styles['hero__info-list']}>
                  <li className={styles['hero__title']}>{anime.title}</li>
                  <li className={styles['hero__info-item']}>Director: {anime.director}</li>
                  <li className={styles['hero__info-item']}>Year: {anime.year}</li>
                  <li className={styles['hero__info-item']}>Genre: {anime.genre}</li>
                  <li className={styles['hero__history']}>{anime.description}</li> 
                </ul>
              </div>
            
            </div>

            <div className={styles['hero__bottom-pattern']}>
              <img src={anime.heroBottomPattern} alt="" className={styles['hero__pattern-image']}/>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroPages