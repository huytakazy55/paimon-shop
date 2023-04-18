import { Outlet } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;



