import React from 'react'
import styles from '../../CSS/Home/About.module.css'
import Img1 from '../../Image/Banner/Text About Us.png'
import Banner from '../../Image/Banner/Element.png'
import Group from '../../Image/Pattern/Element.png'

const About = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <div className={styles.outContainer}>
        <div className={styles.outMainRow}>
          <div className={styles.outBannerSection}>
            <img src={Img1} alt="" className={styles['bg-out-pattern']}/>
          </div>

          <div className={styles.AboutUsRow}>
            <img src={Banner} alt="" className={styles['bg-out-banner']}/>

            <div className={styles.outBannerText}>
              <div className={styles['first-text']}>
                <p className={styles['out-text-first']}>Studio Ghibli was founded with one goal: to explore the depths of the human soul through poetic stories. This fansite is a tribute to the works of Hayao Miyazaki and Isao Takahata, created with the same sincere passion. Immerse yourself in a world where the frame is a painting and the plot is philosophy.</p>
              </div>
              <div className={styles['second-text']}>
                <img src={Group} alt="" className={styles['bg-group-image']} />
                <p className={styles['out-text-second']}>This website, like the studio itself, was born from personal passion and teamwork. It was created by one person with the support of friends who helped select and refine every design solution. We believe that a genuine love for a subject is the best motivation for any endeavor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About