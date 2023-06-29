import React, { useState } from 'react'
import Card from '../Musicplayer/Card'
import ListSongCard from './ListSongCard';


const TrackList = () => {

    const [musicNumber, setMusicNumber] = useState(0);
    const [open, setOpen] = useState(false);
    
  return (
    <div>
        <div className='mainTracklist'>
            <Card props = {{musicNumber, setMusicNumber, setOpen}} />
            <ListSongCard props = {{open, setOpen, musicNumber, setMusicNumber}} />
        </div>
    </div>
  )
}

export default TrackList