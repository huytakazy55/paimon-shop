import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/Home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Musicplayer from './components/Musicplayer/Musicplayer';
import Blog from './components/Blog/Blog';
import { Shop } from 'react-bootstrap-icons';
import './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
            <Route index element={<Home />} />
            <Route path='musicplayer' element={<Musicplayer />} />
            <Route path='blog' element={<Blog />} />
            <Route path='shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
