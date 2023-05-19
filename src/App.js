import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Tile from "./components/Tile";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Tile />

    </div>
  );
}

export default App;
