import React, { useState, useEffect} from "react";
import musics from './assets/data';
import { BsMusicNoteList } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { timer } from "./utils/timer";

const ListSongCard = ({props: {open, setOpen, musicNumber, setMusicNumber}}) => {
  return (
    <div className={`listSongCard ${open ? 'show' : ''}`}>
        <div className="header">
            <div>
                <i><BsMusicNoteList /></i>
                <span>Music List</span>
            </div>
            <i onClick={() => setOpen(false)}><GrClose /></i>
        </div>
        <ul>
            {
                musics.map((music, index) => 
                    <li key={music.id} onClick={() => setMusicNumber(index)}
                    className={`${musicNumber === index ? 'playing': ''}`}>
                        <div className="row">
                            <span>{music.title}</span>
                            <p>{music.artist}</p>
                        </div>
                        <Duration music={music} />
                    </li>
                )
            }
        </ul>
    </div>
  )
}
export default ListSongCard
const Duration = ({music}) => {
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        const audio = new Audio(music.src)
        audio.onloadeddata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration)
            }
        }
    }, [music])
    return (
        <span className="duration">{timer(duration)}</span>
    )
}
