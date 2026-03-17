import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../CSS/Catalog/Films Pages/FooterPages.css'
import Img1 from '../../Image/Pattern/Bottom Pattern Grey.png'
import littel_Star from '../../Image/Pattern/Star Pattern.png'

const FooterPages = ({animeColors, pattern}) => {
  const navigate = useNavigate()

  const footerPattern = pattern || Img1

  const handleClick = (e, path) => {
    e.preventDefault()
    navigate(path)
  }


  return (
    <footer id="contacts" className='footer-section'>
      <div className='footer_container'>
        <div className='footer_sectionLinks'>
          <ul className='footer_uselfulLinks'>
            <li className='footer_name-links'>Useful Links</li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
            </li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="/catalog" onClick={(e) => handleClick(e, '/catalog')}>Catalog</a>
            </li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="/#about" onClick={(e) => handleClick(e, '/#about')}>About Us</a>
            </li>
          </ul>
           
          <ul className='footer_developer'>
            <li className='footer_name-links'>Developer</li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="/" onClick={(e) => handleClick(e, '/')}>Alan81</a>
            </li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="mailto:i28691149@gmail.com">i28691149@gmail.com</a>
            </li>
          </ul>

          <ul className='footer_Contacts'>
            <li className='footer_name-links'>Contacts</li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="https://t.me/L_6464646" target="_blank" rel="noopener noreferrer">Telegram: @L_6469812</a>
            </li>
            <li className='footer_Links'>
              <img src={littel_Star} alt="" className='bg-image-links'/>
              <a href="https://github.com/Alan81" target="_blank" rel="noopener noreferrer">Git Hub: Alan81</a>
            </li>
          </ul>
        </div>

        <div className='footer_sectionPattern'>
          <img src={footerPattern} alt="" className='bg-footer-pattern'/>
        </div>

        <div className='footer_autor-logo'>
          <a href="/" onClick={(e) => handleClick(e, '/')} className='autorname'>Alan81</a>
          <a href="/catalog" onClick={(e) => handleClick(e, '/catalog')} className='logofooter'>Studio Ghibli</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterPages