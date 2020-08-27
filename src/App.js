import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
import Square from './Components/Square';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;