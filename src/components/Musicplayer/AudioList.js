import React, { useState, useEffect } from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';
import { Songs } from './Songs';
import musicsData from './assets/data'
const AudioList = () => {
    // const [songs, setSongs] = useState(musics);
    // const [song, setSong] = useState(musics[0].song);
    // const [img, setImage] = useState(musics[0].imgSrc);
    
    const [songs, setSongs] = useState(null);
    const [song, setSong] = useState(null);
    const [img, setImage] = useState(null);
    const [musics, setMusics] = useState([]);
           
    useEffect(() => {
        (async() => {
            const songList = (await musicsData()).data;
            setSongs(songList);
            setSong(songList[0].song);
            setImage(songList[0].imgSrc);
        })();
    },[]);

    useEffect(() => {
        const songs = document.querySelectorAll(".songs");
        function changeMenuActive() {
          songs.forEach((n) => n.classList.remove("active"));
          this.classList.add("active")
        }
    
        songs.forEach((n) => n.addEventListener("click", changeMenuActive));
      }, []);
    
    const setMainSong = (src, thumbnail) => {
        setSong(src);
        setImage(thumbnail);
    }
    const changeFavourite = (id) => {
        musics.forEach((song) => {
            if (song.id === id) {
                song.favourite = !song.favourite;
            }
        });
        setSongs([...musics]);
    }
  return (
    <div className='audioList'>
        <h2 className='title'>
            The list <span>{musics.length} songs</span>
        </h2>
        <div className='songsContainer'>
            {
                Songs && musics.map((song, index) => (
                    <div className='songs' 
                        key={song.id} 
                        onClick={() => setMainSong(song?.title, song?.thumbnail)}
                    >
                        <div className='count'>#{index + 1}</div>
                        <div className='song'>
                            <div className='imgBox'>
                                <img src={song?.thumbnail} alt='' />
                            </div>
                            <div className='section'>
                                <p className='songName'>
                                {song?.title}
                                <span className='spanArtist'>{song?.artist}</span>
                                </p>
                                <div className='hits'>
                                    <p className='hit'>
                                        <i>
                                            <FaHeadphones />
                                        </i>
                                        95,490,102
                                    </p>
                                    <p className='duration'>
                                        <i>
                                            <FaRegClock />
                                        </i>
                                        03.04
                                    </p>
                                    <div className='favourite' onClick={(e) => changeFavourite(song?.id)}>
                                        {
                                            song?.favourite ? <i><FaHeart /></i> : <i><FaRegHeart /></i>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AudioList