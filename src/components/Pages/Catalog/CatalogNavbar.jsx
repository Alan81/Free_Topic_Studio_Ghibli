import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../CSS/Catalog/CatalogNavbar.css'
import Logo from "../../Image/Banner/Logo.png"

const Menu = [
  {
    id: 1, 
    name: "Home", 
    link: "/",
    type: "route"
  },
  {
    id: 2, 
    name: "Catalog",
    link: "#catalog-films",
    type: "anchor"
  }, 
  {
    id: 3,
    name: "About us", 
    link: "#about",
    type: "anchor"
  },
  {
    id: 4, 
    name: "Contacts", 
    link: "#contacts",
    type: "anchor"
  }
];

const CatalogNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveAnchor(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    const targetId = anchor.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveAnchor(anchor);
    }
  };


  const isActive = (menuItem) => {
    if (menuItem.type === "route") {

      return location.pathname === menuItem.link;
    } else {

      return activeAnchor === menuItem.link;
    }
  };

  return (
    <div className={`catalog-navbar-wrapper ${scrolled ? 'catalog-navbar-scrolled' : ''}`}>
      <div className='catalog-navbar-container'>
        <div className='catalog-container'>
          <div className='catalog-navbar'>
            
            <Link to="/" className='catalog-Logo'>
              <img src={Logo} alt="Studio Ghibli Logo" className='catalog-logo'/>
            </Link>
            
            <div className='catalog-section-menu'>
              <ul className='catalog-menu'>
                {Menu.map((menu) => (
                  <li key={menu.id} className='catalog-menu-item'>
                    {menu.type === "route" ? (

                      <Link to={menu.link} className={`catalog-menu-option ${isActive(menu) ? 'active' : ''}`}>
                        {menu.name}
                      </Link>
                      
                    ) : (

                      <a href={menu.link} className={`catalog-menu-option ${isActive(menu) ? 'active' : ''}`} onClick={(e) => handleAnchorClick(e, menu.link)}>
                        {menu.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogNavbar