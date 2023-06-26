import React from 'react'
import Artist from "../../assets/img/background-genshin.jpg";
import Check from "../../assets/img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bannerMusicPlayer'>
        <img src={Artist} alt='banner' className='bannerMusicPlayerImg'/>
        <div className='content'>
            <div className='breadCrump'>
                <p>
                    Home <span>/ Popular Artist</span>
                </p>
                <i>
                    <FaEllipsisH />
                </i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>Lumine</h2>
                        <img src={Check} alt='Check' />
                    </div>
                    <p>
                        <i>
                            <FaHeadphones />
                        </i>
                        11,123,5431 <span>Monthly listeners</span>
                    </p>
                </div>
                <div className='right'>
                    <a href='#'>Play</a>
                    <a href='#'>
                        <i>
                          <FaCheck />  
                        </i>
                        Following
                    </a>
                </div>
            </div>
        </div>
        <div className="bottomLayer"></div>
    </div>
  )
}

export default Banner