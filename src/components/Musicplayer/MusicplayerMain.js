import React from 'react'
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';
import RightMenu from './RightMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Musicplayer.css'

function MusicplayerMain() {
  return (
    <div className='musicPlayerMain'>
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className='background'></div>
    </div>
  )
}

export default MusicplayerMain