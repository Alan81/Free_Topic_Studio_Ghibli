import React, { useState, useEffect } from 'react'
import '../../CSS/Home/Navbar.css'
import Logo from "../../Image/Banner/Logo.png"

const Menu = [
  {
    id: 1, 
    name: "Home",
    link: "#home",
  },
  {
    id: 2, 
    name: "Catalog",
    link: "#catalog",
  }, 
  {
    id: 3,
    name: "About us",
    link: "#about",
  },
  {
    id: 4, 
    name: "Contacts",
    link: "#contacts",
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

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
          setActiveLink(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    const targetId = link.substring(1); 
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveLink(link);
    }
  };

  return (
    <div className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className='container'>
        <div className='navbar'>
          <a href="#home" className='Logo' onClick={(e) => handleClick(e, '#home')}>
            <img src={Logo} alt="Logo" className='logo'/>
          </a>
          
          <div className='section-menu'>
            <ul className='menu'>
              {Menu.map((menu) => (
                <li key={menu.id} className='menu-item'>
                  <a 
                    href={menu.link} 
                    className={`menu-option ${activeLink === menu.link ? 'active' : ''}`}
                    onClick={(e) => handleClick(e, menu.link)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar