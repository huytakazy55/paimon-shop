import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicplayerMain from "../src/components/Musicplayer/MusicplayerMain";
import Blog from './components/Blog/Blog';
import Shop from './components/Shop/Shop';
import LoginPage from './components/LoginPage';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='musicplayer' element={<MusicplayerMain />} />
          <Route path='blog' element={<Blog />} />
          <Route path='shop' element={<Shop />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



