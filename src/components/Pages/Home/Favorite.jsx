import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from "../../CSS/Home/Favorite.module.css"
import Img1 from '../../Image/Banner/Banner Favorite.png'
import Img2 from '../../Image/Banner/Text Favorite.png'
import Lanterns from '../../Image/Pattern/Lanterns Pattern.png'
import Img3 from '../../Image/Banner/poster_4.png'
import Img4 from '../../Image/Banner/poster_5.png'
import Img5 from '../../Image/Banner/poster_6.png'

const FavPostersData = [
    {
        id: 1,
        img: Img3,
        text: 'Princess Mononoke',
        link: '/anime/13',
        isCentral: false
    },
    {
        id: 2,
        img: Img4,
        text: 'From Up On Poppy Hill',
        link: '/anime/6',
        isCentral: true
    },
    {
        id: 3,
        img: Img5,
        text: 'The Boy And The Heron',
        link: '/anime/1',
        isCentral: false
    }
]

const Favorite = () => { 

return (
    <>
        <div className={styles.favContainer}>
            <div className={styles.favMainRow}>
                <div className={styles.favBannerSection}>
                    <img src={Img1} alt="" className={styles.favBannerImage}/>
                    <img src={Img2} alt="" className={styles.favBannerTextOverlay} />
                </div>

                <img src={Lanterns} alt="" className={styles.favLanternsElement}/>
                
                <div className={styles.favPostersRow}>
                    <div className={styles.favPostersGrid}>
                        {FavPostersData.map((poster) => (
                            <div 
                                className={`${styles.favPosterCard} ${poster.isCentral ? styles.favPosterCentral : ''}`} 
                                key={poster.id}
                            >
                                <Link to={poster.link}>
                                    <svg viewBox="0 0 800 350" className={styles.favTopCurvedText} preserveAspectRatio="xMidYMid meet">
                                        <path id={`favTopPath-${poster.id}`} d="M 120,310 Q 400,-20 680,310"  fill="transparent"/>
                                        <text className={styles.favCurvedTextStyle}>
                                            <textPath href={`#favTopPath-${poster.id}`} startOffset="50%" textAnchor="middle">
                                                {poster.text}
                                            </textPath>
                                        </text>
                                    </svg>

                                    <img src={poster.img} alt={poster.text} className={styles.favPosterImage} />

                                    <svg viewBox="0 0 800 350" className={styles.favBottomCurvedText} preserveAspectRatio="xMidYMid meet">
                                        <path id={`favBottomPath-${poster.id}`} d="M 120,0 Q 400,310 680,0" fill="transparent"/>
                                        <text className={styles.favCurvedTextStyle}>
                                            <textPath href={`#favBottomPath-${poster.id}`} startOffset="50%" textAnchor="middle">
                                                {poster.text}
                                            </textPath>
                                        </text>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Favorite