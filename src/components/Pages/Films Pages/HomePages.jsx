import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BgPattern from '../../Image/Pattern/Background.png'
import NavbarPages from './NavbarPages'
import HeroPages from './HeroPages'
import GalleryPages from './GalleryPages'
import FooterPages from './FooterPages'
import { getAnimeById } from './AnimePages'



const HomePages = () => {
    const {id} = useParams();
    console.log('Film ID:', id)

    const anime = getAnimeById(id)

    const bgPattern ={
        backgroundImage: `url(${BgPattern})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh", 
      }
  return (
    <div style={bgPattern}>
      <NavbarPages animeColors= {anime.colors}/>
      <HeroPages 
      anime={anime}
      heroTopPattern={anime.heroTopPattern}
      heroBottomPattern={anime.heroBottomPattern}
      />
      <GalleryPages gallery ={anime.gallery}/>
      <FooterPages 
      animeColors={anime.animeColors}
      pattern = {anime.pattern}/>
    </div>
  )
}

export default HomePages
