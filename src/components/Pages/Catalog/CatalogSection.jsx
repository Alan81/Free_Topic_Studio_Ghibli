import React, { useEffect } from 'react' 
import '../../CSS/Catalog/CatalogSection.css'
import Img1 from '../../Image/Pattern/Catelog Banner Top Pattern.png'
import Img2 from '../../Image/Pattern/Catalog Banner Bottom Pattern.png'
import BgPattern from '../../Image/Pattern/Background.png'
import CatalogNavbar from './CatalogNavbar'
import CatalogHero from './CatalogHero'
import CatalogFilms from './CatalogFilms'
import CatalogAbout from './CatalogAbout'
import Footer from '../Footer'


const CatalogSection = () => {
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const bgPattern ={
      backgroundImage: `url(${BgPattern})`,
      backgroundPosition: "center",
      backgroundRepeat: " no-repeat",
      backgroundSize: "cover",
      width: "100%",
      minHeight: "100vh", 
  }

  return (
    <div>
      <CatalogNavbar/>
      
      <div style={bgPattern}>
        <div className='pettern-hero' style={{ position: 'relative', zIndex: 1 }}>
          <img src={Img1} alt="" className='bg-image-pattern'/>
          <CatalogHero/>
          <img src={Img2} alt="" className='bg-image-pattern-bottom'/>
        </div>
        <CatalogFilms/>
        <CatalogAbout/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default CatalogSection
