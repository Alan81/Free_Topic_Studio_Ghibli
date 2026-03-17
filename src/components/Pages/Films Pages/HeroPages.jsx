import React from 'react'
import '../../CSS/Catalog/Films Pages/HeroPages.css'
import Top_Pattern from '../../Image/Pattern/Catelog Banner Top Pattern.png'
import Bottom_Pattern from '../../Image/Pattern/Catalog Banner Bottom Pattern.png'

const HeroPages = ({anime, heroTopPattern, heroBottomPattern}) => {
  return (
    <section id="home" className="hero"> 
      <div className='hero__bg-container'>
       
        <div className='hero__container'>
          
          <div className="hero__corner-wrapper">
            
            <div className='hero__top-pattern'>
              <img src={anime.heroTopPattern} alt="" className='hero__pattern-image'/>
            </div>

            <div className='hero__content'>
              <div className='hero__poster'>
                <img src={anime.poster} alt="" className='hero__poster-image'/>
              </div>

              <div className='hero__description'>
                <ul className='hero__info-list'>
                  <li className='hero__title'>{anime.title}</li>
                  <li className='hero__info-item'>Director: {anime.director}</li>
                  <li className='hero__info-item'>Year: {anime.year}</li>
                  <li className='hero__info-item'>Genre: {anime.genre}</li>
                  <li className='hero__history'>{anime.description}</li> 
                </ul>
              </div>
            
            </div>

            <div className='hero__bottom-pattern'>
              <img src={anime.heroBottomPattern} alt="" className='hero__pattern-image'/>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroPages