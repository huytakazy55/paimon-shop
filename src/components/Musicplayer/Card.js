import React, { useState, useRef} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsMusicNoteList, BsFillPlayFill, BsPauseCircle } from 'react-icons/bs';
import { BiSkipPrevious, BiRepeat, BiSkipNext, BiVolumeFull } from 'react-icons/bi';
import musics from './assets/data';
import { timer } from "./utils/timer";

const Card = ({props: { musicNumber, setMusicNumber, setOpen }}) => {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false);
    const [showVolume, setShowVolume] = useState(0);
    const [volume, setVolume] = useState(false);
    const audioRef = useRef()
    function handleLoadStart(e){
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadeddata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration)
            }
        }
        if(play) { audioRef.current.play()}
    }
    function handlePlayingAudio(){
        if(play){
            audioRef.current.pause();
            setPlay(false)
        }else{
            audioRef.current.play();
            setPlay(true)
        }
    }
    function handleTimeUpdate(){
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime);
    }
    function changeCurrentTime(e){
        const currentTime = Number(e.target.value)
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    }
    function handleNextPrev(n){
        setMusicNumber(value => {
            if(n > 0)
                return value + n > musics.length - 1 ? 0 : value + n;
            return value + n < 0 ? musics.length - 1 : value + n;

        })
    }
    return (
        <div className="Card">
            <div className="nav">
                <i class="material-icons"><AiFillCaretDown /></i>
                <span>Now playing {musicNumber + 1 } / { musics.length }</span>
                <i className="material-icons" 
                onClick={() => setOpen(prev => !prev)}><BsMusicNoteList /></i>
            </div>

            <div className="img">
                <img src={musics[musicNumber].thumbnail} alt />
            </div>
            <div className="details">
                <p className="title">{musics[musicNumber].title}</p>
                <p className="artist">{musics[musicNumber].artist}</p>
            </div>
            <div className="progress">
                <input type="range" min={0} max={duration} value={currentTime} onChange={e => changeCurrentTime(e)} />
            </div>
            <div className="timer">
                <span>{timer(currentTime)}</span>
                <span>{timer(duration)}</span>
            </div>
            <div className="controls">
                <i className="material-icons"><BiRepeat /></i>
                <i className="material-icons" id="prev" onClick={() => handleNextPrev(-1)}><BiSkipPrevious /></i>
                <div className="play" onClick={handlePlayingAudio}>
                    <i className="material-icons">{play ? <BsPauseCircle /> : <BsFillPlayFill /> }</i>
                </div>
                <i className="material-icons" id="next" onClick={() => handleNextPrev(1)}><BiSkipNext /></i>
                <i className="material-icons"
                onClick={() => setShowVolume(prev => !prev)}><BiVolumeFull /></i>

                <div className={`volume $`}>
                    <i className="material-icons"><BiVolumeFull /></i>
                    <input type="range" min={0} max={100} />
                    <span>50</span>
                </div>
                
                

            </div>
                <audio src={musics[musicNumber].src} hidden ref={audioRef}
                onLoadStart={handleLoadStart} onTimeUpdate={handleTimeUpdate} />
        </div>
    )
}

export default Card