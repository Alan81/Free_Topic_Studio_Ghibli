import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Home/Favorite.css"
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
        <div className='favContainer' >
            <div className='favMainRow'>

                <div className='favBannerSection'>
                    <img src={Img1} alt="" className='favBannerImage'/>
                    <img src={Img2} alt="" className='favBannerTextOverlay' />
                </div>

                <img src={Lanterns} alt="" className='favLanternsElement'/>
                
                <div className='favPostersRow' >
                    
                    <div className='favPostersGrid'>
                        
                        {FavPostersData.map((poster) => (
                            <div className={`favPosterCard ${poster.isCentral ? 'favPosterCentral' : ''}`} key={poster.id}>
                                <Link to={poster.link}>
                                    <svg viewBox="0 0 800 350" className='favTopCurvedText' preserveAspectRatio="xMidYMid meet">
                                        <path id={`favTopPath-${poster.id}`} d="M 120,310 Q 400,-20 680,310" fill="transparent"/>
                                        <text className='favCurvedTextStyle'>
                                            <textPath href={`#favTopPath-${poster.id}`} startOffset="50%" textAnchor="middle">
                                                {poster.text}
                                            </textPath>
                                        </text>
                                    </svg>

                                    <img src={poster.img} alt={poster.text} className='favPosterImage' />

                                    <svg viewBox="0 0 800 350" className='favBottomCurvedText' preserveAspectRatio="xMidYMid meet">
                                        <path 
                                            id={`favBottomPath-${poster.id}`} 
                                            d="M 120,0 Q 400,310 680,0"
                                            fill="transparent"
                                        />
                                        <text className='favCurvedTextStyle'>
                                            <textPath 
                                                href={`#favBottomPath-${poster.id}`} 
                                                startOffset="50%" 
                                                textAnchor="middle"
                                            >
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