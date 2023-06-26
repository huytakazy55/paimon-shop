import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa"
import { BiPulse } from "react-icons/bi"

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 1,
    icon: <BiPulse />,
    name: "Discover",
  },
  {
    id: 1,
    icon: <FaBroadcastTower />,
    name: "Radio",
  },
  {
    id: 1,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 1,
    icon: <BsJournalAlbum />,
    name: "Album",
  },
  {
    id: 1,
    icon: <FaPodcast />,
    name: "Podcast",
  }
];

export default { MenuList }