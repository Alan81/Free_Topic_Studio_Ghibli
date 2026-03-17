import React, { useEffect, useRef } from 'react'
import '../../CSS/Home/Home.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Favorite from './Favorite'
import Catalog from './Catalog'
import About from './About'
import Footer from '../Footer'
import Vector from '../../Image/Banner/Banner.png'
import pattern from '../../Image/Pattern/Home Banner Pattern.png'
import Cloud from '../../Image/Pattern/Cloud Pattern_2.png'
import Cloud_2 from '../../Image/Pattern/Cloud Pattern.png'
import BgPattern from '../../Image/Pattern/Background.png'



const Home = () => {

  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  const bgImage = {
    backgroundImage: `url(${pattern}), url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    width: "100%",
  }
    
  const bgPattern ={
    backgroundImage: `url(${BgPattern})`,
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh", 
  }
    
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800;
      if (cloudLeftRef.current && cloudRightRef.current) {
      // Левое облако медленнее
        const leftMove = Math.min(scrollY * 0.15, 100);
      // Правое облако быстрее
        const rightMove = Math.min(scrollY * 0.2, 150);
                
      // Вертикальный сдвиг для объема
        const verticalMove = Math.min(scrollY * 0.05, 30);
        cloudLeftRef.current.style.transform = `translate(-${leftMove}px, -${verticalMove}px)`;
        cloudRightRef.current.style.transform = `translate(${rightMove}px, -${verticalMove}px)`;
                
      // Прозрачность при удалении
        const opacity = Math.max(1 - (scrollY / maxScroll) * 0.3, 0.7);
        cloudLeftRef.current.style.opacity = opacity;
        cloudRightRef.current.style.opacity = opacity;
      }
    };

      window.addEventListener('scroll', handleScroll, { passive: true });
          
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []); 

  return (
    <div>
      <div style={bgImage} >
        <div  className=''>
          <Navbar/> 
          <Hero/>
          <div className='cloud-group'>
            <img src={Cloud_2} alt="" className='img-cloud-l'ref={cloudLeftRef}/>
            <img src={Cloud} alt="" className='img-cloud-r'ref={cloudRightRef}/>  
          </div>
        </div>
      </div>
      
      <div style={bgPattern}>
        <Favorite/>
        <Catalog/>
        <About/>
        <Footer/>
      </div>

    </div>
  )
}

export default Home