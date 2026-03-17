import React from 'react'
import '../../CSS/Home/About.css'
import Img1 from '../../Image/Banner/Text About Us.png'
import Banner from '../../Image/Banner/Element.png'
import Group from '../../Image/Pattern/Element.png'

const About = () => {
  return (
    <section id="about" className='about-section'>
      <div className='outContainer'>
        <div className='outMainRow'>
          <div className='outBannerSection'>
            <img src={Img1} alt="" className='bg-out-pattern'/>
          </div>

          <div className='AboutUsRow'>
            <img src={Banner} alt="" className='bg-out-banner'/>

            <div className='outBannerText'>
              <div className='first-text'>
                <p className='out-text-first'>Studio Ghibli was founded with one goal: to explore the depths of the human soul through poetic stories. This fansite is a tribute to the works of Hayao Miyazaki and Isao Takahata, created with the same sincere passion. Immerse yourself in a world where the frame is a painting and the plot is philosophy.</p>
              </div>
              <div className='second-text'>
                <img src={Group} alt="" className='bg-group-image' />
                <p className='out-text-second'>This website, like the studio itself, was born from personal passion and teamwork. It was created by one person with the support of friends who helped select and refine every design solution. We believe that a genuine love for a subject is the best motivation for any endeavor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About