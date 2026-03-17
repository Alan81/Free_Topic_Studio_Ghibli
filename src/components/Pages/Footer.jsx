import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../CSS/Footer.css'
import Img1 from '../Image/Pattern/Bottom Pattern Light.png'
import littel_Star from '../Image/Pattern/Star Pattern.png'

const Footer = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')
                
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`)
          }
        })
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setActiveLink('')
    }, [location.pathname])

    const handleClick = (e, link) => {
      e.preventDefault()
        
      if (link.startsWith('/')) {
        navigate(link)
        setActiveLink('')
      } else if (link.startsWith('#')) {
          const targetId = link.substring(1)
            
          if (location.pathname === '/') {
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              }) 
              setActiveLink(link)
            }
          } else {
              navigate('/', { state: { scrollTo: targetId } })
            }
        } else {
            window.open(link, '_blank')
          }
  }

  return (
    <footer id="contacts" className='footer-section'>
      <div className='exContainer'>
        <div className='exMainRow'>
          <div className='exSectionLinks'>
                        
            <ul className='UselfulLinks'>

              <li className='name-links'>Useful Links</li>

              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="#home" onClick={(e) => handleClick(e, '#home')} className='exTextLinks'>Home</a>
              </li>
                            
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="/catalog" onClick={(e) => handleClick(e, '/catalog')} className='exTextLinks'>Catalog</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="#about" onClick={(e) => handleClick(e, '#about')} className='exTextLinks'>About Us</a>
              </li>
                        
            </ul>
                         
            <ul className='developer'>
              <li className='name-links'>Developer</li>

              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="/" onClick={(e) => handleClick(e, '/')}>Alan81</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="mailto:i28691149@gmail.com" onClick={(e) => handleClick(e, 'mailto:i28691149@gmail.com')}>i28691149@gmail.com</a>
              </li>
            </ul>

            <ul className='Contacts'>
              <li className='name-links'>Contacts</li>

              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="https://t.me/L_6464646" target="_blank" rel="noopener noreferrer" onClick={(e) => handleClick(e, 'https://t.me/L_6469812')}>Telegram: @L_6469812</a>
              </li>
              <li className='Links'>
                <img src={littel_Star} alt="" className='bg-image-links'/>
                <a href="https://github.com/Alan81" target="_blank" rel="noopener noreferrer" onClick={(e) => handleClick(e, 'https://github.com/Alan81')}>Git Hub: Alan81</a>
              </li>
            </ul>
          </div>

          <div className='exSectionPattern'>
            <img src={Img1} alt="" className='bg-footer-pattern'/>
          </div>

          <div className='autor-logo'>
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className='autorname'>Alan81</a>
            <a href="/home" onClick={(e) => handleClick(e, '/home')} className='logofooter'>Studio Ghibli</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer