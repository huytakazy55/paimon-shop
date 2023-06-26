import React, { useEffect } from 'react';
import "../Musicplayer/Musicplayer.css";
import Banner from './Banner';
import Artist from "../../assets/img/artist.jpg";
import Check from "../../assets/img/check.png";
import { FaUser } from 'react-icons/fa';
import AudioList from './AudioList';


const MainContainer = () => {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");
  
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active")
    }
  
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className='mainContainer'>
      <Banner />
      <div className='menuList'>
        <ul>
          <li>
            <a href='#'>Popular</a>
          </li>
          <li>
            <a href='#'>Albums</a>
          </li>
          <li>
            <a href='#'>Songs</a>
          </li>
          <li>
            <a href='#'>Fans</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
        <p><i><FaUser /></i>12.3M <span>Followers</span></p>
      </div>
      <AudioList />
    </div>
  )
}

export default MainContainer