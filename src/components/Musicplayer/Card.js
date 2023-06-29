import React, { useState, useRef, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { BsMusicNoteList, BsFillPlayFill, BsPauseCircle, BsFillVolumeMuteFill, BsRepeat, BsRepeat1, BsShuffle } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext, BiVolumeFull } from 'react-icons/bi';
import musics from './assets/data';
import { timer } from "./utils/timer";

const Card = ({props: { musicNumber, setMusicNumber, setOpen }}) => {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false);
    const [showVolume, setShowVolume] = useState(0);
    const [volume, setVolume] = useState(50);
    const [repeat, setRepeat] = useState(<BsRepeat/>);
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
    function handleRepeat() {
        setRepeat( value => {
            switch (value) {
                case '<BsRepeat/>' :
                    console.log(value)
                    return <BsRepeat1 />;
                case (<BsRepeat1 />) :
                    return <BsShuffle />;
                default:
                    return <BsRepeat />;
            }
        })
    }
    
    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume])
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div className="imgCard">
                        <img src={musics[musicNumber].thumbnail} alt />
                    </div>
                </Col>
                <Col md={8} className="Card">
                    <div className="nav">
                        <i class="material-icons"><AiFillCaretDown /></i>
                        <span>Now playing {musicNumber + 1 } / { musics.length }</span>
                        <i className="material-icons" 
                        onClick={() => setOpen(prev => !prev)}><BsMusicNoteList /></i>
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
                        <i className="material-icons" onClick={handleRepeat}>{repeat}</i>
                        <i className="material-icons" id="prev" onClick={() => handleNextPrev(-1)}><BiSkipPrevious /></i>
                        <div className="play" onClick={handlePlayingAudio}>
                            <i className="material-icons">{play ? <BsPauseCircle /> : <BsFillPlayFill /> }</i>
                        </div>
                        <i className="material-icons" id="next" onClick={() => handleNextPrev(1)}><BiSkipNext /></i>
                        <i className="material-icons"
                        onClick={() => setShowVolume(prev => !prev)}><BiVolumeFull /></i>

                        <div className={`volume ${showVolume ? 'show' : ''}`}>
                            <i className="material-icons" onClick={() => setVolume(v => v > 0 ? 0 : 100)}>
                            {volume === 0 ? <BsFillVolumeMuteFill /> : <BiVolumeFull />}</i>
                            <input type="range" min={0} max={100} value={volume} 
                            onChange={e => setVolume(Number(e.target.value))} />
                            <span>{volume}</span>
                        </div>
                        
                        

                    </div>
                        <audio src={musics[musicNumber].src} hidden ref={audioRef}
                        onLoadStart={handleLoadStart} onTimeUpdate={handleTimeUpdate} />
                </Col>
            </Row>
        </Container>
        
    )
}

export default Card