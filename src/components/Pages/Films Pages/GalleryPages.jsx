import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles from '../../CSS/Catalog/Films Pages/GalleryPages.module.css'

const GalleryPages = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const slides = gallery.map(src => ({ src }))

  return (
    <div id='gallery'>
      <div className={styles.container}>
        <div className={styles['gallery-container']}>
          {gallery.map((image, index) => (
            <div key={index} className={styles['gallery-poster']} onClick={() => {setPhotoIndex(index), setIsOpen(true)}} style={{ cursor: 'pointer' }}>
              <img src={image} alt={`Gallery ${index + 1}`} className={styles['bg-gallery-image']}/>
            </div>
          ))}
        </div>
      </div>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} index={photoIndex} slides={slides} animation={{ fade: 300 }} controller={{ closeOnBackdropClick: true }}/>
    </div>
  )
}

export default GalleryPages